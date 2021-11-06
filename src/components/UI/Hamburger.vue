<script>
export default {
  name: "hamburger",
};
</script>

<template>
  <button>
    <div></div>
    <div></div>
    <div></div>
  </button>
</template>

<style lang="scss" scoped>
* {
  --btn-color: #494949;
  --btn-lighten: rgb(109, 109, 109);
  --btn-darken: rgb(39, 39, 39);
}

button {
  cursor: pointer;
  z-index: 3;
  padding: 0.8em 1.4em;
  border: none;
  background-color: transparent;
  /* transition: background-color 200ms ease-in-out; */
  div {
    width: 40px;
    height: 5px;
    background-color: rgb(255, 255, 255);
    margin: 6px 0;
  }
}

button:hover {
  //   background-color: var(--btn-lighten);
}

button:active {
  //   background-color: var(--btn-darken);
  //   box-shadow: none;
}
</style>