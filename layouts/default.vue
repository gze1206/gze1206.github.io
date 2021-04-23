<template>
  <v-app dark>
    <v-app-bar fixed app class="noselect" id="main-appbar">
      <v-btn v-text="title" plain outlined to="/"></v-btn>
      <v-spacer />
      <v-btn plain class="route-btn" active-class="active-route"
        v-for="menu in menus" :key="menu.to"
        :to="menu.to" v-text="menu.text" :exact="menu.exact"
      ></v-btn>
    </v-app-bar>
    <v-main :class="awesome ? 'wrapper' : ''">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>
        created with 
        <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> by 
        <a href="https://github.com/gze1206/" target="_blank">gze1206</a>
        {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'gze1206.github.io',
      awesome: false,
      menus: [
        { text: 'tags', to: '/tags', exact: false },
        { text: 'blog', to: '/posts', exact: true },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#main-appbar {
  background-color: rgba(0,0,0,0.6);
}

.route-btn {
  color: grey;

  &.active-route {
    color: white;
  }
}

.wrapper {
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 600% 600%;

  -webkit-animation: rainbow 6s linear infinite alternate;
  -z-animation: rainbow 6s linear infinite alternate;
  -o-animation: rainbow 6s linear infinite alternate;
    animation: rainbow 6s linear infinite alternate;}

  @-webkit-keyframes rainbow {
      0%{background-position:0% 0%}
      100%{background-position:100% 100%}
  }
  @-moz-keyframes rainbow {
      0%{background-position:0% 0%}
      100%{background-position:100% 100%}
  }
  @-o-keyframes rainbow {
      0%{background-position:0% 0%}
      100%{background-position:100% 100%}
  }
  @keyframes rainbow { 
      0%{background-position:0% 0%}
      100%{background-position:100% 100%}
}
</style>