<template>
  <div class="noselect" style="min-height: 3000px!important;">
    <v-parallax dark src="/img/hero1.jpg" id="main-hero" height="400">
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="display-1 font-weight-bold mb-4">
            {{ title }}
          </h1>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="md-content" v-html="compiled" />
  </div>
</template>

<script>
import mdit from 'markdown-it';
import hljs from 'highlight.js';
import { createClient } from '~/plugins/contentful.js';

const client = createClient();
const md = mdit({
  breaks: true,
  langPrefix: '',
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

export default {
  async asyncData({ env, params }) {
    let res = await client.getEntries({
      'content_type': env.CTF_BLOG_HOME_TYPE_ID
    });

    return {
      entry: res.items.pop()
    }
  },
  data: function() {
    return {
      entry: null
    }
  },
  computed: {
    compiled: function () {
      return md.render(this.entry?.fields.body ?? '# EMPTY')
    },
    title: function () {
      return this.entry?.fields.header ?? 'AAAA'
    },
  }
}
</script>

<style scoped>
#main-hero {
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
}

.md-content {
  margin-top: 400px;
  padding-top: 5em;
}
</style>
