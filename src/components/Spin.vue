<template>
  <div>
    <div
      :style="{ background: color }"
      class="spin"
    >
      <div
        :style="{ background: color }"
        class="spin-sub"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.spin {
  position: relative;
  left: -2.4rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #4c6ef5;
  top: -1.4rem;
  border: 1rem solid #f9f9f9;
  & .spin-sub {
    position: absolute;
    width: 0.7rem;
    height: 0.7rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: white solid 0.6em;
    background: #4c6ef5;
    border-radius: 50%;
  }
}
</style>
