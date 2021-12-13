<script>
export default {
  name: "HomeBtn",
};
</script>

<template>
  <button>
    <i class="fa fa-home" aria-hidden="true"></i>
  </button>
</template>

<style lang="scss" scoped>
button {
  color: white;
  font-size: 32px;
  cursor: pointer;
  z-index: 3;
  // padding: 0.5em;
  border: none;
  background-color: transparent;
  // position: fixed;
  // left: 0.5em;
  // top: 0.5em;
  /* transition: background-color 200ms ease-in-out; */
}

button:hover {
  //   background-color: var(--btn-lighten);
}

button:active {
  //   background-color: var(--btn-darken);
  //   box-shadow: none;
}
</style>