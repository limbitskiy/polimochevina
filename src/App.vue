<script>
import CommonMethods from "@/mixins/CommonMethods";
import TheFooter from "@/components/TheFooter.vue";
import Sidebar from "@/components/Sidebar.vue";
import Cart from "@/components/Cart.vue";

export default {
  name: "App",
  components: { TheFooter, Sidebar, Cart },
  methods: {
    handleScroll() {
      console.log(window.scrollY);
      if (window.innerWidth < 768) {
        this.$store.commit("SET_SHOW_CATALOG", true);
        this.$store.commit("SET_SHOW_ABOUT", true);
        this.$store.commit("SET_SHOW_WHY_US", true);
        this.$store.commit("SET_SHOW_FOOTER", true);
      }
      if (window.scrollY > 100) {
        this.$store.commit("SET_SHOW_CATALOG", true);
      }
      if (window.scrollY > 1200 && window.innerWidth > 768) {
        this.$store.commit("SET_SHOW_ABOUT", true);
      }
      // if (window.scrollY > 1830 && window.innerWidth < 768) {
      //   this.$store.commit("SET_SHOW_ABOUT", true);
      // }
      if (window.scrollY > 1500 && window.innerWidth > 768) {
        this.$store.commit("SET_SHOW_WHY_US", true);
        this.$store.commit("SET_SHOW_FOOTER", true);
      }
      // if (window.scrollY > 3250 && window.innerWidth < 768) {
      //   this.$store.commit("SET_SHOW_WHY_US", true);
      //   this.$store.commit("SET_SHOW_FOOTER", true);
      // }
    },
  },
  mixins: [CommonMethods],
  computed: {
    showFooter() {
      return this.$store.state.showFooter;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchTranslations");
  },
};
</script>

<template>
  <header>
    <LangSwitch />
    <hamburger @click="this.$store.commit('SET_SIDEBAROPEN', !sideBarOpen)" />
  </header>
  <main v-if="translationsLoaded" v-scroll="handleScroll">
    <transition name="sidebar-slide" mode="out-in">
      <Sidebar v-if="this.$store.state.sideBarOpen">
        <Cart />
      </Sidebar>
    </transition>
    <div class="component">
      <router-view v-slot="{ Component }">
        <transition name="slide-up" mode="out-in">
          <component :is="Component" :key="this.$route.path" />
        </transition>
      </router-view>
    </div>
  </main>
  <TheFooter v-if="translationsLoaded && showFooter" />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  --nav-height: 50px;

  --accent-color: #333;
  --accent-color2: #ff7a7a;
  --accent-color3: #eab552;

  --grey-color: rgb(71, 71, 71);
  --medium-grey-color: #938e8e;
  --lightgrey-color: #c4c4c4;

  --font-size-08: 0.8rem;
  --font-size-15: 1.5rem;

  --font-xsmall: 0.8rem;
  --font-small: 0.9rem;
}

#app {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--grey-color);
  position: relative;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

ol {
  margin-left: 3vw;

  li::marker {
    font-weight: 700;
  }
}

header {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: var(--nav-height);
  padding: 5px 1rem;
  z-index: 10;
}

.opaque {
  opacity: 0;
}

.container {
  padding-inline: 1rem;
}

.small-container {
  width: 100%;
  padding-inline: 5px;
  height: 100%;
  display: grid;
  place-items: center;
  justify-items: stretch;
}

.section {
  padding: 4em 0;
}

.btn-group {
  display: flex;

  button:first-of-type {
    background-color: var(--accent-color2);
  }
}

.form-btn-group {
  justify-content: space-between;
}

.product-btn-group {
  gap: 1rem;
}

.btn-center {
  justify-content: center;
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

.title-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: clamp(1.5rem, calc(20px + 1vw), 3rem);
  font-weight: 500;
}

.section-subtitle {
  font-size: clamp(1rem, calc(1rem + 1vw), 1.3rem);
  width: 80%;
  line-height: 26px;
  color: var(--grey-color);
}

.component {
  padding-top: var(--nav-height);
  min-height: 52vh;
  display: grid;
  place-items: center;
}

// animations

// SIDEBAR ANIMATION

.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition: transform 0.3s ease;
}

.sidebar-slide-enter-from,
.sidebar-slide-leave-to {
  transform: translateX(100%);
}

// SLIDE UP

.slide-up-enter-active {
  transition: opacity 0.3s ease, transform 0.5s ease;
}

.slide-up-leave-active {
  transition: opacity 0.1s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
}

// SLIDE RIGHT

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-5%);
}

.slide-right-enter-to {
  opacity: 1;
}

.slide-right-enter-active {
  transition: opacity 2s ease, transform 1s ease;
}

@media (min-width: 768px) {
  .container {
    max-width: 1400px;
    margin-inline: auto;
  }
  .small-container {
    max-width: 800px;
    margin-inline: auto;
  }

  .section-subtitle {
    width: 80%;
  }
}
</style>
