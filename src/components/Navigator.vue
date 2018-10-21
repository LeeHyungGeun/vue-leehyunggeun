<template>
  <nav class="navi">
    <router-link
      to="/me"
      class="active"
    >
      Me
    </router-link>
    <router-link to="/resume">Resume</router-link>
  </nav>
</template>

<style lang="scss" scoped>
@import 'styles/variables.scss';
.navi {
  background: $headerBackground;
  display: flex;
  justify-content: flex-end;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  overflow: hidden;
  padding-right: 2rem;
  & a {
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    outline: none;
    user-select: none;
    &:hover {
      background: $mainBackground;
    }
    &.active,:active {
      background: $mainBackground;
    }
  }
}
</style>
