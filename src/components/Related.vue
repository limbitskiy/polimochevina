<script>
import CommonMethods from "@/mixins/CommonMethods";

export default {
  name: "Related",
  mixins: [CommonMethods],
  computed: {
    filteredProducts() {
      const currentProductId = parseInt(this.$route.params.id);
      return this.$store.state.products.filter(
        (prod) => prod.id !== currentProductId
      );
    },
  },
};
</script>

<template>
  <div class="related section">
    <div class="title-box">
      <h2 class="section-title">{{ localize.relatedTitle }}</h2>
    </div>
    <ul>
      <li
        v-for="product in filteredProducts"
        :key="product.id"
        class="related-item"
      >
        <router-link
          :to="{
            name: 'Product',
            params: { id: product.id, slug: product.slug },
          }"
        >
          <img :src="'/images/' + product.gallery[0]" />
          <span>{{ shorterProductName(product.name[currentLang]) }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.related {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}

.related-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  text-align: center;
  padding: 0.5rem 1rem;
  width: 10rem;
  border-radius: 0.5rem;
  transition: box-shadow 0.3s ease;

  img {
    object-fit: cover;
    width: 120px;
    height: 180px;
  }

  &:hover {
    // box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 30%);
  }
}

@media (min-width: 768px) {
  .related {
    grid-column: 1/4;
  }
}
</style>