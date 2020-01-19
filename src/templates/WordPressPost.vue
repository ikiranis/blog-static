<template>
  <Layout>
    <h3 v-html="$page.wordPressPost.title" class="text-center"/>

    <div class="row">
      <small class="mx-auto">{{ postDate }}</small>
    </div>

    <div class="row px-3">
      <div v-if="$page.wordPressPost.categories.length">
        <ul class="list">
          <li v-for="category in $page.wordPressPost.categories" :key="category.id">
            <g-link :to="category.path"><span class="badge badge-warning">{{ category.title }}</span></g-link>
          </li>
        </ul>
      </div>

      <div v-if="$page.wordPressPost.tags.length">
        <ul class="list">
          <li v-for="tag in $page.wordPressPost.tags" :key="tag.id">
            <g-link :to="tag.path"><span class="badge badge-primary">{{ tag.title }}</span></g-link>
          </li>
        </ul>
      </div>
    </div>

    <div v-html="$page.wordPressPost.content"/>

    <comment />

    <comments  />

  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    id
    title
    content
    excerpt
    date
    path
    featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        width
      }
    }
    categories {
      id
      title
      path
    }
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>

  import moment from 'moment'
  import Comments from '@/components/Comments.vue'
  import Comment from '@/components/Comment.vue'

export default {
  components: { Comments, Comment },

  metaInfo () {
    return {
      title: this.$page.wordPressPost.title,
      meta: [
        { name: 'description', content: this.description },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@' + process.env.GRIDSOME_TWITTER_NAME },
        { name: 'twitter:title', content: this.$page.wordPressPost.title },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image:src', content: '' },

        { property: "og:title", content: this.$page.wordPressPost.title },
        { property: "og:type", content: 'article' },
        { property: "og:url", content: process.env.GRIDSOME_SITE_URL + this.$page.wordPressPost.path },
        { property: "og:image", content: '' },
        { property: "og:description", content: this.description },
        { property: "og:site_name", content: process.env.GRIDSOME_SITE_NAME },
        { property: "article:published_time", content: this.$page.wordPressPost.date },
        { property: "article:section", content: this.categories },
        { property: "article:tag", content: this.tags }

      ]
    }
  },

  computed: {
    postDate() {
      return moment(this.$page.wordPressPost.date).format('DD/MM/YYYY')
    },

    description() {
      return this.$page.wordPressPost.excerpt.replace(/<\/?[^>]+>/ig, "");
    },

    categories() {
      let categories = []

      this.$page.wordPressPost.categories.forEach((category) => {
        categories.push(category.title)
      })

      return categories
    },

    tags() {
      let tags = []

      this.$page.wordPressPost.tags.forEach((tag) => {
        tags.push(tag.title)
      })

      return tags
    }
  }

}
</script>

<style>
  ul.list {
    list-style: none;
    padding: 0;
  }
  ul.list li {
    display: inline-block;
    margin-right: 0.25em;
  }
  ul.list.tags li a {
    padding: 0.25em 0.5em;
    background-color: lightgray;
  }
  ul.list.categories li:after {
    content: ',';
    display: inline-block;
  }
  ul.list li:last-child:after {
    content: '';
  }
</style>
