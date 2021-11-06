<script>
import { translationsArray } from "@/language/Main.js";
import Catalog from "@/components/Catalog.vue";

export default {
  name: "Main",
  components: { Catalog },
  props: ["currentLang", "products"],
  data() {
    return {
      translation: translationsArray,
    };
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <section class="cta">
      <h1>{{ this.translation[this.currentLang].jTitle }}</h1>
      <ul>
        <li>{{ this.translation[this.currentLang].jSubtitle1 }}</li>
        <li>{{ this.translation[this.currentLang].jSubtitle2 }}</li>
        <li>{{ this.translation[this.currentLang].jSubtitle3 }}</li>
      </ul>
    </section>
    <section>
      <Catalog :currentLang="currentLang" :products="products" />
    </section>
    <section>
      <h2 class="section-title">
        {{ this.translation[this.currentLang].aboutTitle }}
      </h2>
      <div class="about-body">
        <p>
          {{ this.translation[this.currentLang].aboutBody }}
        </p>
        <img src="@/assets/about.jpg" />
      </div>
    </section>
    <section>
      <h2 class="section-title">
        {{ this.translation[this.currentLang].wTitle }}
      </h2>
      <div class="w-items">
        <div class="w-item">
          <!-- <img src="@/assets/images/factory.svg" alt="" /> -->
          <div class="w-title">
            {{ this.translation[this.currentLang].wOneTitle }}<br />
          </div>
          <div class="w-desc">
            <span>{{ this.translation[this.currentLang].wOneDesc }}</span>
          </div>
        </div>

        <div class="w-item">
          <!-- <img src="@/assets/images/thumb.png" alt="" /> -->
          <div class="w-title">
            {{ this.translation[this.currentLang].wTwoTitle }}<br />
          </div>
          <div class="w-desc">
            <span>{{ this.translation[this.currentLang].wTwoDesc }}</span>
          </div>
        </div>

        <div class="w-item">
          <!-- <img src="@/assets/images/cash.png" alt="" /> -->
          <div class="w-title">
            {{ this.translation[this.currentLang].wThreeTitle }}<br />
          </div>
          <div class="w-desc">
            <span>{{ this.translation[this.currentLang].wThreeDesc }}</span>
          </div>
        </div>

        <div class="w-item">
          <!-- <img src="@/assets/images/flask.png" alt="" /> -->
          <div class="w-title">
            {{ this.translation[this.currentLang].wFourTitle }}<br />
          </div>
          <div class="w-desc">
            <span>{{ this.translation[this.currentLang].wFourDesc }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  margin: 4em 0;
}

.section-title {
  font-size: clamp(1.5em, calc(20px + 1vw), 40px);
  text-align: center;
  margin-bottom: 1.2em;
}

.cta {
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 6em 0;
  h1 {
    font-size: 42px;
    font-size: clamp(1.5em, calc(24px + 2vw), 46px);
    font-weight: 700;
    max-width: 70%;
  }
  li {
    font-size: 24px;
    font-size: clamp(1em, calc(16px + 1vw), 24px);
    font-weight: 500;
    line-height: 38px;
    list-style: none;
    margin-left: 2em;
  }
}

.about-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 3em;

  > p {
    line-height: 1.5em;
  }

  img {
    max-height: 350px;
    border-radius: 25px;
  }
}

.w-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3em;
  margin: 2em;
  justify-content: center;
}

.w-item {
  text-align: center;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 25px;
  padding: 2em 1.5em;
  background-color: white;
  color: black;
}

.w-title {
  font-weight: 600;
}

.w-desc {
  margin-top: 5px;
}

@media screen and (max-width: 1200px) {
  .w-items {
    grid-template-columns: repeat(2, 300px);
  }
}

@media (max-width: 1000px) {
  .about-body {
    grid-template-columns: 1fr;
    grid-gap: 1em;
    padding: 1em;

    img {
      object-fit: contain;
      width: 100%;
    }
  }
}

@media screen and (max-width: 700px) {
  .w-items {
    grid-template-columns: 260px;
  }

  .w-item {
    padding: 1.5em 0.5em;
  }
}
</style>
