<template>
  <div class="resume-item">
    <h2
      :style="{ color: resume.backgroundColor }"
      class="category"
    >
      {{ resume.category }}
    </h2>
    <template v-for="(item, index) in resume.items">
      <div
        :key="index"
        :style="{ borderColor: resume.backgroundColor }"
        class="item"
      >
        <Spin :color="resume.backgroundColor" />
        <div class="description">
          <h3 class="company">{{ item.company }}</h3>
          <div class="position">
            {{ item.position }}
          </div>
          <div class="date">
            {{ item.date }}
          </div>
          <div
            v-if="item.skill"
            class="skill"
          >
            {{ item.skill }}
          </div>
          <ul>
            <template v-for="detail in item.details">
              <li :key="detail">{{ detail }}</li>
            </template>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Spin from 'components/Spin.vue'

export default {
  components: { Spin },
  props: {
    resume: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

.resume-item {
  margin: 0 auto;
  margin-top: 4rem;
  text-align: left;
  & .category {
    color: $mainBackground;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  & .item {
    display: flex;
    border-left: 0.3rem $mainBackground solid;
    & + .item {
      padding-top: 1.5rem;
    }
    & .description {
      left: -1rem;
      position: relative;
      & .company {
        font-size: 2rem;
        font-weight: 200;
        margin-bottom: 0.2rem;
      }
      & .position {
        font-size: 1.1rem;
        color: #888;
        margin-bottom: 0.2rem;
      }
      & .date, .skill {
        font-size: 0.9rem;
        color: #888;
        margin-bottom: 0.2rem;
      }
      & ul {
        margin-top: 1rem;
        padding-left: 1rem;
        list-style: disc outside none;
        line-height: 1.5rem;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
        color: #333;
        & li {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}
</style>
