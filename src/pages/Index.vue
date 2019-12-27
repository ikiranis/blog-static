<template>
  <Layout>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 3) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        content
        date
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>

  body, html {
    font-family: "Comfortaa", cursive;
    font-size: 20px;
  }

</style>
