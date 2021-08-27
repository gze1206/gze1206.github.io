<template>
  <v-container fluid>
    <v-row>
      <v-card outlined class="full-width">
        <v-card-actions>
          <v-btn plain icon @click="moveBack"><v-icon>arrow_back</v-icon></v-btn>
        </v-card-actions>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle v-if="createdAt" class="post-date">Written at {{ createdAt | formatDate }}</v-card-subtitle>
        <v-card-subtitle v-if="updatedAt" class="post-date">Updated at {{ updatedAt | formatDate }}</v-card-subtitle>
        <v-divider class="mt-4"/>
        <div class="ma-4 md-content" v-html="compiled" />
        <div v-if="tags">
          <v-divider/>
          <v-card-actions class="d-flex flex-wrap">
            <v-chip v-for="tag in tags" :key="tag" class="mr-2 mb-3" @click="viewTaggedPosts(tag)">
                <v-icon left>label</v-icon>
                {{ tag }}
            </v-chip>
          </v-card-actions>
        </div>

        <v-divider/>
        <!-- 라이브리 시티 설치 코드 -->
        <div id="lv-container" data-id="city" data-uid="MTAyMC81MzMzOC8yOTgxMg==">
          <script type="text/javascript">
            (function(d, s) {
                const dup = d.querySelector('iframe[title=livere-comment]');
                if (dup) return;

                var j, e = d.getElementsByTagName(s)[0];

                if (typeof LivereTower === 'function') { return; }

                j = d.createElement(s);
                j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
                j.async = true;

                e.parentNode.insertBefore(j, e);
            })(document, 'script');
          </script>
          <noscript> 라이브리 댓글 작성을 위해 JavaScript를 활성화 해주세요</noscript>
        </div>
        <!-- 시티 설치 코드 끝 -->

      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import mdit from 'markdown-it';
import hljs from 'highlight.js';
import { createClient } from '~/plugins/contentful.js';
import filters from '~/filters';

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
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
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
  filters: {
    ...filters
  },
  computed: {
    compiled: function () {
      return md.render(this.entry?.fields.body ?? '# EMPTY')
    },
    title: function () {
      return this.entry?.fields.title ?? 'AAAA'
    },
    tags: function () {
      return this.entry?.fields.tags
    },
    createdAt: function () {
      return this.entry?.sys.createdAt;
    },
    updatedAt: function () {
      return this.entry?.sys.updatedAt;
    }
  }
}
</script>

<style scoped>
.post-date {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.md-content {
  overflow-x: scroll;
}
</style>

<style>
#lv-container, #taboola-livere {
  padding-left: 1em;
  padding-right: 1em;
  background-color: white;
}
</style>
