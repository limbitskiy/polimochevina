<script>
import { translationsArray } from "@/language/Sidebar.js";

export default {
  name: "Sidebar",
  emits: ["hideSidebar"],
  props: ["currentLang", "cart"],
  data() {
    return {
      translation: translationsArray,
    };
  },
};
</script>

<template>
  <div class="sidebar">
    <div class="s-header">
      <span>Корзина</span>
      <svg
        @click="this.$emit('hideSidebar')"
        class="close"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        viewBox="0 0 512 512"
      >
        <path
          d="M74.966 437.013c-99.97-99.97-99.97-262.065 0-362.037 100.002-99.97 262.066-99.97 362.067 0 99.971 99.971 99.971 262.067 0 362.037-100.001 99.985-262.065 99.985-362.067 0zm316.816-316.786c-75.001-74.985-196.564-74.985-271.534 0-75.001 74.985-75.001 196.55 0 271.535 74.97 74.986 196.533 74.986 271.534 0 74.972-74.987 74.972-196.55 0-271.535zm-203.658 248.91-45.251-45.266 67.876-67.877-67.876-67.876 45.251-45.267L256 210.743l67.877-67.892 45.25 45.267-67.876 67.876 67.876 67.877-45.25 45.266L256 301.245l-67.876 67.892z"
        />
      </svg>
    </div>
    <slot></slot>
    <router-link to="/order">
      <btn v-if="this.cart.length > 0">{{
        this.translation[this.currentLang].order
      }}</btn>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  background-color: white;
  color: grey;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  min-width: 350px;
  z-index: 15;
  box-shadow: -1px 0 8px rgba(0, 0, 0, 0.3);
  .s-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #dad7d7;
    padding: 1em;
    .close {
      width: 40px;
      fill: grey;
      cursor: pointer;
      &:hover {
        fill: black;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .sidebar {
    min-width: 100%;
  }
}
</style>