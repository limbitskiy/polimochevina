<script>
import { translationsArray } from "@/language/Order.js";
import Cart from "@/components/Cart.vue";

export default {
  name: "Order",
  components: { Cart },
  emits: ["removeFromCart", "changeQuantity", "hideSidebar"],
  props: ["currentLang", "products", "cart"],
  data() {
    return {
      translation: translationsArray,
    };
  },
  methods: {
    sendData() {
      const form = document.querySelector("#form");
      const formData = new FormData(form);
      const cartNames = this.cart.map((item) => {
        return `${item.name[0]} - ${item.select} - x${item.quantity}`;
      });
      const cartData = cartNames.join("\n");
      formData.append("cartData", cartData);
      formData.append("total", this.total);

      fetch("mail.php", {
        method: "post",
        body: formData,
      })
        .then(function (response) {
          return response.text();
        })
        .then(function (text) {
          console.log(text);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  computed: {
    // is needed for sendData()
    total() {
      return this.cart.reduce((sum, item) => {
        return (sum += item.price[item.select] * item.quantity);
      }, 0);
    },
  },
  mounted() {
    window.scrollTo({
      top: 0,
    });
    this.$emit("hideSidebar");
  },
};
</script>

<template>
  <div class="small-container">
    <h2 class="order-title">
      {{ this.translation[this.currentLang].orderTitle }}
    </h2>
    <p class="order-subtitle">
      {{ this.translation[this.currentLang].orderSubTitle }}
    </p>
    <Cart
      :currentLang="currentLang"
      :products="products"
      :cart="cart"
      @removeFromCart="this.$emit('removeFromCart', $event)"
      @changeQuantity="this.$emit('changeQuantity', $event)"
    />
    <Form :currentLang="currentLang" />
    <router-link to="/thank-you">
      <form-btn @click="sendData">
        {{ this.translation[this.currentLang].orderBtn }}
      </form-btn>
    </router-link>

    <router-link to="/">
      <btn>
        {{ this.translation[this.currentLang].orderBtnBack }}
      </btn>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.order-title {
  font-size: clamp(1.5em, calc(20px + 1vw), 40px);
  text-align: center;
  color: white;
  margin-bottom: 0.5em;
}
.order-subtitle {
  margin-bottom: 1.5em;
  text-align: center;
}
</style>