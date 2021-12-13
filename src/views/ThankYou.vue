<script>
import { translationsArray } from "@/language/ThankYou.js";

export default {
  name: "ThankYou",
  data() {
    return {
      translation: translationsArray,
    };
  },
  emits: ["resetCart", "hideSidebar"],
  props: ["currentLang"],
  methods: {},
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
    <div class="ty-message">
      <h2 class="ty-title">
        {{ this.translation[this.currentLang].tyTitle }}
      </h2>
      <p>
        {{ this.translation[this.currentLang].tyMsg }}
      </p>
    </div>
    <router-link to="/">
      <btn @click="this.$emit('resetCart')">{{
        this.translation[this.currentLang].homeBtn
      }}</btn>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.ty-title {
  font-size: clamp(1.5em, calc(20px + 1vw), 40px);
  text-align: center;
  color: white;
  margin-bottom: 0.5em;
}
.ty-message {
  text-align: center;
  margin-top: 8em;
  margin-bottom: 2em;
  p {
    text-align: center;
  }
}

@media screen and (max-width: 800px) {
  .ty-message {
    padding: 0 2em;
  }
}
</style>