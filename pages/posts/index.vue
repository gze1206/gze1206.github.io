<template>
  <v-container fluid class="d-flex flex-wrap noselect px-0">
    <article-preview 
      v-for="entity in entries"
      :key="entity.sys.id"
      :entity="entity"
      class="mr-auto mb-3"
    />
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
    });

    return {
      entries: res.items
    }
  }
}
</script>
