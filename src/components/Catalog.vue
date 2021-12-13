<script>
import { translationsArray } from "@/language/Catalog.js";

export default {
  name: "Catalog",
  components: {},
  emits: ["addToCart"],
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
  <h2 class="section-title">Каталог</h2>
  <div class="catalog">
    <div class="prod-card" v-for="product in this.products" :key="product.id">
      <img :src="require('../assets/' + product.image)" />
      <h3 class="prod-title">{{ product.name[this.currentLang] }}</h3>
      <p class="prod-desc">{{ product.desc[this.currentLang] }}</p>
      <div class="packing-wrap">
        <span class="packing-name"
          >{{ this.translation[this.currentLang].packing }}
        </span>
        <select v-model="product.select" class="select-packing">
          <option v-for="(packing, index) in product.packing" :key="index">
            {{ packing }}
          </option>
        </select>
      </div>
      <span class="prod-price">&#8372;{{ product.price[product.select] }}</span>
      <btn @click="this.$emit('addToCart', product.id)">В корзину</btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3em;
}

.prod-card {
  flex: 0 1 370px;
  display: grid;
  grid-auto-rows: 250px 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
  justify-items: center;
  text-align: center;
  padding: 2.5em;
  background-color: white;
  border-radius: 35px;
  height: 600px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
  img {
    width: 270px;
    height: 250px;
    object-fit: cover;
    justify-self: center;
    border-radius: 35px;
  }
  .prod-title {
    font-weight: 500;
    color: black;
  }
  .prod-desc {
    font-size: 14px;
    color: #818181;
  }
  .packing-wrap {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    .packing-name {
      color: black;
    }
    .select-packing {
      border-color: var(--accent-color);
      border-radius: 5px;
      background-color: white;
      font-size: 18px;
      height: 30px;
      padding: 4px 8px;
      outline: none;
      cursor: pointer;
    }
  }
  .prod-price {
    font-size: 26px;
    font-weight: 500;
    color: black;
  }
}

@media screen and (max-width: 400px) {
  .prod-card {
    width: 320px;
    padding: 2em 1em;
  }
}
</style>
