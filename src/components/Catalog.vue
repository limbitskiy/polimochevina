<script>
import CommonMethods from "@/mixins/CommonMethods";
import CatalogItem from "@/components/CatalogItem.vue";

export default {
  name: "Catalog",
  components: { CatalogItem },
  mixins: [CommonMethods],
  computed: {
    showCatalog() {
      return this.$store.state.showCatalog;
    },
  },
};
</script>

<template>
  <div v-if="showCatalog">
    <transition name="slide-right" appear>
      <div class="title-box">
        <h2 class="section-title">Каталог</h2>
      </div>
    </transition>
    <div class="catalog" id="catalog" v-if="productsLoaded">
      <CatalogItem
        v-for="(product, index) in this.$store.state.products"
        :key="product.id"
        :product="product"
        :index="index"
      />
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
</style>
