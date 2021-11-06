<script>
export default {
  name: "btn",
};
</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
* {
  --btn-color: #494949;
  --btn-lighten: rgb(109, 109, 109);
  --btn-darken: rgb(39, 39, 39);
}

button {
  cursor: pointer;
  z-index: 3;
  font-size: 18px;
  padding: 0.9em 1.4em;
  border: 1px solid grey;
  border-radius: 25px;
  color: rgb(0, 0, 0);
  background-color: transparent;
  width: 90%;
  margin: 0 auto;
  transition: 200ms ease-in-out;
}

button:hover {
  background-color: var(--accent-color);
  border-color: white;
  color: white;
}

button:active {
  transition: none;
  background-color: #d3a043;
  /* color: black; */
  /* border-color: black; */
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
}
</style>