<template>
  <div class="resume-wrap">
    <div class="resume">
      <Overview :overview="overview" />
      <div class="resume-items">
        <template v-for="resume in resumes">
          <Resumes
            :resume="resume"
            :key="resume"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Resumes from 'components/Resumes.vue'
import Overview from 'components/Overview.vue'
export default {
  components: { Resumes, Overview },
  data: function () {
    return {
      resumes: this.$store.state.resumes,
      overview: this.$store.state.overview
    }
  }
}
</script>

<style lang="scss">
@import 'styles/variables.scss';
.resume-wrap {
  background: $background;
  .resume {
    max-width: 850px;
    margin: 0 auto;
    & .resume-items {
      padding-bottom: 2rem;
    }
  }
}
</style>
