<template>
  <div class="section small-container">
    <div class="title-box">
      <h2 class="section-title">
        {{ localize.notFoundTitle }}
      </h2>
      <router-link to="/">
        <p class="section-subtitle">
          {{ localize.notFoundSubtitle }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import CommonMethods from "@/mixins/CommonMethods";

export default {
  name: "404",
  mixins: [CommonMethods],
};
</script>
