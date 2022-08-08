<script>
export default {
  name: "Hamburger",
};
</script>

<template>
  <button>
    <i class="fa fa-bars" aria-hidden="true"></i>
  </button>
</template>

<style lang="scss" scoped>
button {
  color: var(--grey-color);
  font-size: 22px;
  cursor: pointer;
  // z-index: 3;
  border: none;
}
</style>