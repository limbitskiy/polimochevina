<script>
import CommonMethods from "@/mixins/CommonMethods";

export default {
  name: "CartItem",
  data() {
    return {
      quantity: this.itemInCart.quantity,
      packing: this.itemInCart.packing,
    };
  },
  props: ["itemInCart"],
  mixins: [CommonMethods],
  computed: {
    product() {
      return this.$store.state.products.find(
        (item) => item.id === this.itemInCart.id
      );
    },
    price() {
      return this.itemInCart.price;
    },
  },
};
</script>

<template>
  <li>
    <div class="popup-item-section">
      <img :src="'/images/' + product.gallery[0]" />
    </div>

    <div class="popup-item-section">
      <span class="cart-item-name">{{
        shorterProductName(product.name[currentLang])
      }}</span>
    </div>

    <div class="popup-item-section">
      <span class="cart-item-packing">{{ this.packing }}</span>
    </div>

    <div class="popup-item-section">
      <!-- <input
        class="cart-item-quantity"
        type="number"
        min="1"
        max="99"
        :value="this.quantity"
        disabled="disabled"
      /> -->
      <span class="quantity">x{{ this.quantity }}</span>
    </div>

    <div class="popup-item-section">
      <span class="cart-item-price">{{ price }}грн</span>
    </div>

    <div
      class="popup-item-section"
      @click="this.$store.dispatch('removeFromCart', this.itemInCart)"
    >
      <i class="fas fa-trash"></i>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.cart-item-name {
  padding: 5px;
  max-width: 25ch;
}

.quantity {
  background-color: rgb(209, 209, 209);
  padding: 5px;
  border-radius: 3px;
}

img {
  display: none;
  width: 0;
}

li {
  display: grid;
  grid-template-columns: 1px auto 40px 35px 55px 20px;
  gap: 0.1rem;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid #dad7d7;
  height: 80px;
  font-size: var(--font-size-08);

  i {
    color: rgb(0, 0, 0);
    cursor: pointer;
    &:hover {
      color: rgb(221, 43, 43);
    }
  }
}

// input {
//   width: 1.5em;
//   height: 2em;
//   border: none;
//   color: rgb(0, 0, 0);
//   font-size: 16px;
//   border-radius: 5px;
//   text-align: center;
//   margin: 0 5px;
//   background-color: rgb(209, 209, 209);
//   &::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   &::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   &:focus-visible {
//     outline: none;
//   }
// }
// input[type="number"] {
//   -moz-appearance: textfield;
// }

@media (min-width: 768px) {
  li {
    font-size: initial;
    grid-template-columns: 0.6fr 2fr 60px 30px 70px 30px;
    gap: 0.5rem;
  }

  img {
    display: block;
    height: 60px;
    width: 50px;
  }
}
</style>