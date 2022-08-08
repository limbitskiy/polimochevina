<script>
import CommonMethods from "@/mixins/CommonMethods";
import CartItem from "@/components/CartItem";

export default {
  name: "Cart",
  mixins: [CommonMethods],
  components: { CartItem },
  computed: {},
};
</script>

<template>
  <p v-if="cart.length === 0" class="empty-cart-message">
    <i>{{ localize.emptyCart }}</i>
  </p>

  <ul class="cart">
    <CartItem
      v-for="itemInCart in cart"
      :key="itemInCart"
      :itemInCart="itemInCart"
    />
  </ul>

  <div class="total-and-order">
    <p class="total" v-if="this.cart.length > 0">
      {{ localize.totalTitle }}
      <span>{{ total }}</span> грн
    </p>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  z-index: 9;
}

.total {
  text-align: center;
  font-size: var(--font-big);
  margin: 1em;
  > span {
    font-size: var(--font-bigger);
    font-weight: 600;
  }
}
.empty-cart-message {
  padding: 1em 3em;
  text-align: center;
}
</style>