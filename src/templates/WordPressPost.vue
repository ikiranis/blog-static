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

    <Adsense  class="mb-5 mt-5"
              ad-client="ca-pub-4611864067867074"
              ad-slot="3220919277"
              ad-style="display:block"
              ad-format="auto"
              data_full_width_responsive="true" />

    <div v-if="comments.length">
      <h4>Comments</h4>

      <ul class="list mx-5">
        <li v-for="comment in this.comments" :key="comment.id" >
          <h5>{{ comment.author_name }}</h5>
          <div v-html="comment.content.rendered"/>
        </li>
      </ul>
    </div>

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

  import Adsense from '@/components/Adsense.vue'
  import axios from 'axios'
  import moment from 'moment'

export default {
  components: { Adsense },

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
