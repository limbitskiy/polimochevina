<script>
export default {
  name: "Btn",
};
</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.7rem 2.25rem;
  border: none;
  /* box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3); */
  color: rgb(255, 255, 255);
  background-color: var(--accent-color);
  transition: 200ms ease-in-out;
}

button:hover {
}

button:active {
  transition: none;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
}
@media (min-width: 768px) {
  button {
    padding: 0.8rem 3rem;
  }
}
</style>