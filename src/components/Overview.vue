<template>
  <div class="overview">
    <h2 class="title">
      Overview
    </h2>
    <p class="description">
      {{ overview.description }}
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      overview: this.$store.state.overview
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';
.overview {
  margin: 0 auto;
  padding-top: 4rem;
  /* width: 700px; */
  text-align: left;
  & .title {
    color: $mainBackground;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  & .description {
    font-size: 1.2rem;
    line-height: 2rem;
    color: #333;
  }
}
</style>
