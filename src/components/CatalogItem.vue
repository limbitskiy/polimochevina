<script>
import CommonMethods from "@/mixins/CommonMethods";

export default {
  name: "CatalogItem",
  props: ["product", "index"],
  mixins: [CommonMethods],
};
</script>

<template>
  <transition name="slide-up" appear>
    <div class="prod-card" :style="{ transitionDelay: 0.3 * index + 's' }">
      <img :src="'/images/' + product.gallery[0]" />
      <div class="prod-text">
        <h3 class="prod-title">
          {{ shorterProductName(product.name[currentLang]) }}
        </h3>
        <span
          >{{ localize.priceForKg }} -
          <span class="prod-price">&#8372;{{ product.priceForKg }}</span></span
        >
        <router-link
          :to="{
            name: 'Product',
            params: { id: product.id, slug: product.slug },
          }"
        >
          <btn>{{ localize.productDetails }}</btn>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.prod-card {
  font-family: "Roboto", sans-serif;
  flex: 0 1 310px;
  text-align: center;
  border: 1px solid var(--lightgrey-color);
  overflow: hidden;

  button {
    opacity: 0;
  }

  &:hover .prod-text {
    transform: translateY(-50px);
  }

  &:hover .prod-text button {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    justify-self: center;
    transition: transform 0.3s ease;
  }

  .prod-title {
    font-weight: 500;
  }

  .prod-text {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    width: 100%;
    height: 150px;
    padding-top: 2rem;
    align-items: center;
    justify-content: center;
    background-color: white;
    transition: transform 0.3s ease;
  }

  .prod-price {
    font-size: var(--font-size-15);
    font-weight: 500;
    color: var(--accent-color2);
  }
}
</style>