import Vue from "vue"

if (!Vue.isMixedIn) {
  Vue.isMixedIn = true;

  Vue.mixin({
    methods: {
      moveBack: function () {
        this.$router.go(-1);
      },
      viewPost: function (slug) {
        this.$router.push(`/posts/${slug}`);
      },
      viewTaggedPosts: function (tag) {
        this.$router.push(encodeURI(`/tags/${tag}`));
      },
    }
  })
}