<template>
  <nav class="navi">
    <router-link
      :class="{ active: menu == 'me' }"
      to="/me"
      @click.native="changeMenu('me')"
    >
      Me
    </router-link>
    <router-link
      :class="{ active: menu == 'resume' }"
      to="/resume"
      @click.native="changeMenu('resume')"
    >
      Resume
    </router-link>
  </nav>
</template>

<script>
export default {
  computed: {
    menu () {
      return this.$store.state.menu
    }
  },
  methods: {
    changeMenu (menu) {
      this.$store.dispatch('CHANGE_MENU', menu)
    }
  }
}
</script>

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
    & + a {
      margin-left: 0.5rem;
    }
  }
}
</style>
