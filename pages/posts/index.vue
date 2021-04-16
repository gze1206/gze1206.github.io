<template>
  <v-container>
    <v-col cols="4" v-for="entity in entries" :key="entity.sys.id">
      <v-card outlined elevation="0">
        <v-btn block plain :to="`/posts/${entity.fields.slug}`">
          {{ entity.fields.title }}
        </v-btn>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import { createClient } from '~/plugins/contentful.js';

const client = createClient();

export default {
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
