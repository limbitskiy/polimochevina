<script>
import FooterBox from "@/components/FooterBox.vue";
import Sidebar from "@/components/Sidebar.vue";
import Cart from "@/components/Cart.vue";
import products from "@/products.json";

export default {
  name: "App",
  components: { FooterBox, Sidebar, Cart },
  data() {
    return {
      cart: [],
      sidebarOpen: false,
      products: products,
      currentLang: 0,
    };
  },
  methods: {
    addToCart(e) {
      let prod = this.products.find((item) => {
        return item.id === e;
      });
      if (this.cart.includes(prod)) return;
      this.cart.push(prod);
    },
    removeFromCart(product) {
      this.cart.quantity = 1;
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    changeQuantity(event) {
      let e = event[0];
      let prod = event[1];
      let thisProduct = this.cart.find((item) => item.id === prod.id);
      thisProduct.quantity = e.target.value;
    },
    changeLang(lang) {
      this.currentLang = lang;
    },
    closeSidebarTimer() {
      setTimeout(() => {
        this.sidebarOpen = false;
      }, 1000);
    },
    resetCart() {
      this.cart = [];
      this.products.forEach((item) => {
        item.quantity = 1;
      });
    },
  },
  computed: {
    cartLength() {
      return this.cart.length;
    },
  },
  watch: {
    cartLength() {
      if (this.cartLength > 0 && !this.sidebarOpen) {
        this.sidebarOpen = true;
      }
      if (this.cartLength === 0) {
        this.closeSidebarTimer();
      }
    },
  },
};
</script>

<template>
  <header>
    <router-link to="/">
      <home-btn />
    </router-link>
    <hamburger @click="this.sidebarOpen = true" />
  </header>
  <main>
    <transition name="slide" mode="out-in">
      <Sidebar
        v-if="this.sidebarOpen"
        :currentLang="currentLang"
        :cart="cart"
        @hideSidebar="this.sidebarOpen = false"
      >
        <Cart
          :currentLang="currentLang"
          :products="products"
          :cart="cart"
          @removeFromCart="removeFromCart"
          @changeQuantity="changeQuantity"
        />
      </Sidebar>
    </transition>
    <div class="component">
      <router-view
        :currentLang="currentLang"
        :products="products"
        :cart="cart"
        @addToCart="addToCart"
        @hideSidebar="this.sidebarOpen = false"
        @removeFromCart="removeFromCart"
        @changeQuantity="changeQuantity"
        @resetCart="resetCart"
      ></router-view>
    </div>
  </main>
  <FooterBox :currentLang="currentLang" />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --accent-color: #eab552;
}
#app {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(221, 128, 36);
  background: linear-gradient(
    144deg,
    rgba(221, 128, 36, 1) 0%,
    rgba(237, 194, 93, 1) 100%
  );
  color: white;
  position: relative;
}

header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dd8124;
  border-bottom: 1px solid white;
  width: 100%;
  height: 50px;
  padding: 5px 15px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.small-container {
  max-width: 800px;
  margin: 0 auto;
}

section {
  padding: 4em 0;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #e9e9e9;
}

::-webkit-scrollbar-thumb {
  background: rgb(58, 58, 58);
  &:hover {
    background: rgb(90, 90, 90);
  }
}

.section-title {
  font-size: clamp(1.5em, calc(20px + 1vw), 40px);
  text-align: center;
  color: white;
  margin-bottom: 1.6em;
}

.component {
  padding: 8em 0;
  min-height: 64vh;
}

.slide-enter-active {
  animation: slide 0.2s ease-out;
}

.slide-leave-active {
  animation: slide 0.2s ease-out reverse;
}

@keyframes slide {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@media screen and (max-width: 800px) {
  .small-container {
    width: 100%;
    padding: 0 5px;
  }
}
</style>
