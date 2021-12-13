<script>
export default {
  name: "FormBtn",
};
</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
* {
  --btn-color: #d76117;
  --btn-lighten: #f17f38;
  --btn-darken: #b45113;
}

button {
  cursor: pointer;
  font-size: 18px;
  padding: 0.9em 1.4em;
  border: none;
  border-radius: 20px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  color: rgb(255, 255, 255);
  background-color: var(--btn-color);
  width: 100%;
  margin: 0;
  margin-bottom: 25px;
  transition: 200ms ease-in-out;
}

button:hover {
  background-color: var(--btn-lighten);
  border-color: white;
  color: rgb(0, 0, 0);
}

button:active {
  transition: none;
  background-color: var(--btn-darken);
  /* color: black; */
  /* border-color: black; */
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
}
</style>