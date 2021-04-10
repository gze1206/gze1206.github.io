<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-btn v-text="title" plain to="/" />
      <v-spacer />
    </v-app-bar>
    <v-main>
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
      title: 'gze1206.github.io'
    }
  }
}
</script>
