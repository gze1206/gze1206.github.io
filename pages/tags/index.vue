<template>
  <v-container fluid class="d-flex flex-wrap noselect">
    <v-chip
      v-for="tag in tags"
      :key="tag"
      class="mr-auto mb-3"
      @click="viewTaggedPosts(tag)"
    >
      <v-icon left>label</v-icon>
      {{ tag }}
    </v-chip>
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
      tags: [
        ...new Set([
          ...res.items.flatMap(iter => iter.fields.tags)
        ])
      ].filter(iter => iter)
    }
  }
}
</script>
