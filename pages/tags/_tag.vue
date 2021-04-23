<template>
  <v-container fluid class="noselect">
    <v-row>
      <v-btn plain outlined class="mb-3 mr-4" to="/tags">
        <v-icon>arrow_back</v-icon>
        back to tags
      </v-btn>
      <span class="text-h4 font-weight-light">
        Tag : {{ tag }}
      </span>
    </v-row>
    <v-row class="d-flex flex-wrap noselect pt-3">
      <article-preview
        v-for="entity in entries"
        :key="entity.sys.id"
        :entity="entity"
        class="mr-auto mb-3"
      />
    </v-row>
  </v-container>
</template>

<script>
import articlePreview from '~/components/articlePreview.vue';

import { createClient } from '~/plugins/contentful.js';

const client = createClient();

export default {
  components: { articlePreview },
  async asyncData({ env, params }) {
    let res = await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.tags[in]': params.tag
    });

    return {
      entries: res.items
    }
  },
  data: function () {
    return {
      tag: this.$route.params.tag
    }
  }
}
</script>
