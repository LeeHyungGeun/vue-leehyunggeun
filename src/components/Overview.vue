<template>
  <div class="overview">
    <h2 class="title">
      Overview
    </h2>
    <p class="description">
      I am passionate Senior Front-End engineer with a strong background in design, development, leadership and exceptional problem solving skills. I’d love to work in a company that could benefit from my strengths and that promotes professional growth & advancement in their products and engineering teams.
    </p>
  </div>
</template>

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
