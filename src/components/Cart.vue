<script>
import { translationsArray } from "@/language/Cart.js";

export default {
  name: "Cart",
  data() {
    return {
      translation: translationsArray,
    };
  },
  emits: ["changeQuantity", "removeFromCart"],
  props: ["currentLang", "products", "cart"],
  computed: {
    total() {
      return this.cart.reduce((sum, item) => {
        return (sum += item.price[item.select] * item.quantity);
      }, 0);
    },
  },
};
</script>

<template>
  <ul class="cart">
    <p v-if="this.cart.length === 0" class="empty-cart-message">
      <i>{{ this.translation[this.currentLang].emptyCart }}</i>
    </p>
    <li v-for="(product, index) in cart" :key="index">
      <div class="popup-item-section">
        <img :src="require('../assets/' + product.image)" />
      </div>

      <div class="popup-item-section">
        <span class="cart-item-name">{{ product.name[currentLang] }}</span>
      </div>

      <div class="popup-item-section">
        <span class="cart-item-packing">{{ product.select }}</span>
      </div>

      <div class="popup-item-section">
        <span>x</span>
        <input
          class="cart-item-quantity"
          type="number"
          min="1"
          max="99"
          :value="product.quantity"
          @change="this.$emit('changeQuantity', [$event, product])"
        />
      </div>

      <div class="popup-item-section">
        <span class="cart-item-price"
          >{{ product.price[product.select] }}грн</span
        >
      </div>

      <div
        class="popup-item-section"
        @click="this.$emit('removeFromCart', product)"
      >
        <i class="fas fa-trash"></i>
      </div>
    </li>
    <div class="total-and-order">
      <p class="total" v-if="this.cart.length > 0">
        {{ this.translation[this.currentLang].totalTitle }}
        <span>{{ this.total }}</span> грн
      </p>
    </div>
  </ul>
</template>


<style lang="scss" scoped>
.cart-item-name {
  font-size: var(--font-small);
  padding: 5px;
}

.cart {
  z-index: 9;
  > li {
    display: grid;
    grid-template-columns: 0.6fr 2fr 60px 50px 70px 30px;
    grid-gap: 0.5em;
    justify-items: center;
    align-items: center;
    border-bottom: 1px solid #dad7d7;
    height: 80px;
    i {
      color: rgb(0, 0, 0);
      cursor: pointer;
      &:hover {
        color: rgb(221, 43, 43);
      }
    }
  }

  input {
    width: 1.5em;
    height: 2em;
    border: none;
    color: rgb(0, 0, 0);
    font-size: 16px;
    border-radius: 5px;
    text-align: center;
    margin: 0 5px;
    background-color: rgb(209, 209, 209);
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus-visible {
      outline: none;
    }
  }
  input[type="number"] {
    -moz-appearance: textfield;
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
  img {
    height: 60px;
    border-radius: 15px;
  }
}

@media screen and (max-width: 480px) {
  .cart > li {
    grid-template-columns: 1px auto 40px 50px 55px 30px;
    grid-gap: 0.1em;
  }
  img {
    display: none;
    width: 0;
  }
}
</style>