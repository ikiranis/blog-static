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

// <meta name="description" content="Page description. No longer than 155 characters." />
//
//           <!-- Twitter Card data -->
//           <meta name="twitter:card" content="summary">
//           <meta name="twitter:site" content="@publisher_handle">
//           <meta name="twitter:title" content="Page Title">
//           <meta name="twitter:description" content="Page description less than 200 characters">
//           <meta name="twitter:creator" content="@author_handle">
//           <-- Twitter Summary card images must be at least 120x120px -->
//   <meta name="twitter:image" content="http://www.example.com/image.jpg">
//
//           <!-- Open Graph data -->
//           <meta property="og:title" content="Title Here" />
//           <meta property="og:type" content="article" />
//           <meta property="og:url" content="http://www.example.com/" />
//           <meta property="og:image" content="http://example.com/image.jpg" />
//           <meta property="og:description" content="Description Here" />
//           <meta property="og:site_name" content="Site Name, i.e. Moz" />
//           <meta property="fb:admins" content="Facebook numeric ID" />
//
  metaInfo () {
    return {
      title: this.$page.wordPressPost.title,
      meta: [
        { name: 'description', content: this.$page.wordPressPost.excerpt },

        { name: 'twitter:card', content: this.$page.wordPressPost.excerpt },
        { name: 'twitter:site', content: '@' + process.env.GRIDSOME_TWITTER_NAME },
        { name: 'twitter:title', content: this.$page.wordPressPost.title },
        { name: 'twitter:description', content: this.$page.wordPressPost.excerpt },
        { name: 'twitter:image', content: '' },

        { property: "og:title", content: this.$page.wordPressPost.title },
        { property: "og:type", content: 'article' },
        { property: "og:url", content: this.$page.wordPressPost.path },
        { property: "og:image", content: '' },
        { property: "og:description", content: this.$page.wordPressPost.excerpt },
        { property: "og:site_name", content: 'process.env.GRIDSOME_SITE_NAME' },
      ]
    }
  },

  computed: {
    postDate() {
      return moment(this.$page.wordPressPost.date).format('DD/MM/YYYY')
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
