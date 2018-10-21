<template>
  <div class="app">
    <Navigator />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigator from 'components/Navigator.vue'
export default {
  components: { Navigator }
}
</script>

<style lang="scss">
html, body, h1, h2, h3, h4, h5, h6, div, ul, li, ol, span, p, table, th, tr, td {
  margin: 0;
  padding: 0;
  border: 0;
}
.main {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
