<template>
  <Layout>
    <h2 v-html="$page.wordPressPost.title" class="text-center"/>

    <h5>{{ postDate }}</h5>

    <img
      v-if="$page.wordPressPost.featuredMedia"
      :src="$page.wordPressPost.featuredMedia.sourceUrl"
      :width="$page.wordPressPost.featuredMedia.mediaDetails.width"
      :alt="$page.wordPressPost.featuredMedia.altText"
    />
    <div v-html="$page.wordPressPost.content"/>

    <div v-if="comments.length">
      <h4>Comments</h4>

      <ul class="list mx-5">
        <li v-for="comment in this.comments" :key="comment.id" >
          <h5>{{ comment.author_name }}</h5>
          <div v-html="comment.content.rendered"/>
        </li>
      </ul>
    </div>

    <template v-if="$page.wordPressPost.categories.length">
      <h4>Posted in</h4>
      <ul class="list categories">
        <li v-for="category in $page.wordPressPost.categories" :key="category.id" >
          <g-link :to="category.path">{{ category.title }}</g-link>
        </li>
      </ul>
    </template>
    <template v-if="$page.wordPressPost.tags.length">
      <h4>Tags</h4>
      <ul class="list tags">
        <li v-for="tag in $page.wordPressPost.tags" :key="tag.id" >
          <g-link :to="tag.path">{{ tag.title }}</g-link>
        </li>
      </ul>
    </template>
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    id
    title
    content
    date
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

  import axios from 'axios'
  import moment from 'moment'

export default {
  metaInfo () {
    return {
      title: this.$page.wordPressPost.title
    }
  },

  data() {
    return {
      comments: []
    }
  },

  computed: {
    postDate() {
      return moment(this.$page.wordPressPost.date).format('DD/MM/YYYY')
    }
  },

  mounted() {
    this.getComments()
  },

  methods: {
    getComments() {
      axios.get(process.env.GRIDSOME_WORDPRESSURL + '/wp-json/wp/v2/comments?post='
              + this.$page.wordPressPost.id
              + '&orderby=date&order=asc')
          .then((res) => {
            this.comments = res.data
          })
          .catch((err) => {
            console.log(err);
          })
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
