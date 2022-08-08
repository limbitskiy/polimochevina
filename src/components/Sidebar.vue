<script>
import CommonMethods from "@/mixins/CommonMethods";

export default {
  name: "Sidebar",
  mixins: [CommonMethods],
};
</script>

<template>
  <div class="sidebar">
    <div class="s-header">
      <span>Корзина</span>
      <i
        class="fas fa-times close"
        @click="this.$store.commit('SET_SIDEBAROPEN', false)"
      ></i>
    </div>
    <slot></slot>
    <div class="btn-group btn-center">
      <btn
        v-if="cart.length > 0"
        @click="
          this.$router.push('/order');
          this.$store.commit('SET_SIDEBAROPEN', false);
        "
        >{{ localize.order }}</btn
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  background-color: white;
  position: fixed;
  inset: 0 0 0 auto;
  min-width: 350px;
  z-index: 15;
  box-shadow: -1px 0 8px rgba(0, 0, 0, 0.3);

  .s-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #dad7d7;
    padding: 1em;

    .close {
      font-size: 1.3rem;
      cursor: pointer;

      &:hover {
        color: black;
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