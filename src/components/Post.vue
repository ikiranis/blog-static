<template>
  <div>
    <g-link :to="post.path">
      <h3 v-html="post.title" class="text-center" />
    </g-link>

    <small>{{ postDate }}</small>

    <div v-html="post.content" />
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  computed: {
    postDate() {
      return moment(this.post.date).format('DD/MM/YYYY')
    }
  },
}
</script>
