<template>
  <div>
    <g-link :to="post.path">
      <h2 v-html="post.title" />
    </g-link>
    <div v-html="post.content" />
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
