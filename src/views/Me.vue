<template>
  <div class="me">
    <Me />
  </div>
</template>

<script>
import Me from 'components/Me.vue'
export default {
  components: { Me }
}
</script>

<style lang="scss">
@import 'styles/variables.scss';
.me { width: 100%; height: 100%; background: $mainBackground; }
</style>
