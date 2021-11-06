<script>
import FooterBox from "@/components/FooterBox.vue";
import products from "@/products.json";

export default {
  name: "App",
  components: { FooterBox },
  data() {
    return {
      cart: [],
      cartOpen: false,
      products: products,
      currentLang: 0,
    };
  },
};
</script>

<template>
  <header>
    <hamburger />
  </header>
  <main>
    <router-view
      :currentLang="currentLang"
      :products="products"
      :cart="cart"
    ></router-view>
  </main>
  <FooterBox :currentLang="currentLang" />
</template>

<style lang="scss">
:root {
  --accent-color: #eab552;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  // min-height: 200vh;
  // min-width: 100vw;
  // position: relative;
}

header {
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
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
}
</style>
