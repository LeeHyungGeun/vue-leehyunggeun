<template>
  <div class="profile">
    <img
      class="image"
      src="https://avatars1.githubusercontent.com/u/2471651?s=460&v=4"
    >
    <p class="description">
      Hello, I'm Ken!
    </p>
    <div class="link">
      <a
        href="https://github.com/leehyunggeun/"
        target="_blank"
      >
        <i
          class="fa fa-github"
          title="Github"
        />
      </a>
      <a
        href="https://linkedin.com/in/leehyunggeun/"
        target="_blank"
      >
        <i
          class="fa fa-linkedin"
          title="Linkedin"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  text-align: center;
  & .image {
    margin-top: 5rem;
    margin-bottom: 5rem;
    border-radius: 50%;
    width: 13rem;
    height: 13rem;
  }
  & .description {
    font-size: 3rem;
    color: #fff;
    font-weight: 600;
    margin-bottom: 5rem;
  }
  & .link {
    a {
      text-decoration: none;
      color: inherit;
      & i {
        font-size: 3rem;
        &:hover {
          cursor: pointer;
          color: white;
        }
      }
      & + a {
        margin-left: 3rem;
      }
    }
  }
}
</style>
