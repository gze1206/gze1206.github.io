<template>
  <ul>
    <li v-for="entity in entries" :key="entity.sys.id">{{ entity.fields.title }}</li>
  </ul>
</template>

<script>
import { createClient } from '~/plugins/contentful.js';

const client = createClient();

export default {
  async asyncData ({ env, params }) {
    let res = await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'sys.id[slug]': params.slug
    });

    return {
      entries: res.items
    }
  }
}
</script>
