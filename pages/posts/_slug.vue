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
        <div class="ma-4" v-html="compiled" />
        <div v-if="tags">
          <v-divider/>
          <v-card-actions>
            <v-chip v-for="tag in tags" :key="tag" class="mr-2" @click="viewTaggedPosts(tag)">
                <v-icon left>label</v-icon>
                {{ tag }}
            </v-chip>
          </v-card-actions>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';
import { createClient } from '~/plugins/contentful.js';
import filters from '~/filters';

const client = createClient();

export default {
  created: function() {
    marked.setOptions({
      langPrefix: '',
      highlight: (code, lang) => {
        return hljs.highlightAuto(code, [lang]).value
      }
    });
  },
  async asyncData({ env, params }) {
    // console.log(env.CTF_BLOG_POST_TYPE_ID, params.slug)
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
      return marked(this.entry?.fields.body ?? '#EMPTY')
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
  },
  methods: {
    moveBack: function () {
      this.$router.go(-1)
    },
    viewTaggedPosts: function (tag) {
      this.$router.push(encodeURI(`/tags/${tag}`))
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
</style>
