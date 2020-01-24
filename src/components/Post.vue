<template>
  <div>
    <g-link :to="post.path">
      <h3 v-html="post.title" class="text-center" />
    </g-link>

    <div class="row">
      <small class="mx-auto">{{ postDate }}</small>
    </div>

    <div v-if="category" class="row" >
        <div v-if="post.featuredMedia" class="col-lg col-12 my-auto">
          <img :src="post.featuredMedia.sourceUrl">
        </div>

        <div class="col-lg col-12" v-html="post.excerpt" />
    </div>

    <div v-if="!category" v-html="post.content" />

  </div>
</template>


<script>
import moment from "moment"

export default {
  props: {
    post: {
      type: Object,
      required: true
    },

    category: {
      type: Boolean,
      required: false
    }
  },

  computed: {
    postDate() {
      return moment(this.post.date).format('DD/MM/YYYY')
    }
  },
}
</script>
