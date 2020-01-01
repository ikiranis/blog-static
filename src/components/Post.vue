<template>
  <div>
    <g-link :to="post.path">
      <h3 v-html="post.title" class="text-center" />
    </g-link>

    <div class="row">
      <small class="mx-auto">{{ postDate }}</small>
    </div>

    <div v-html="post.content" />

    <Adsense  class="mb-3 mt-3"
              ad-client="ca-pub-4611864067867074"
              ad-slot="3220919277"
              ad-style="display:block !important"
              ad-format="auto"
              data_full_width_responsive="true" />

  </div>
</template>


<script>
import moment from "moment"
import Adsense from '@/components/Adsense.vue'

export default {
  components: { Adsense },
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
