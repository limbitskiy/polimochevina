<script>
import CommonMethods from "@/mixins/CommonMethods";

export default {
  name: "ThankYou",
  mixins: [CommonMethods],
};
</script>

<template>
  <div class="small-container">
    <div class="section">
      <div class="title-box">
        <h2 class="section-title">
          {{ localize.tyTitle }}
        </h2>
        <p class="section-subtitle">
          {{ localize.tyMsg }}
        </p>
      </div>
      <div class="btn-group btn-center">
        <btn @click="this.$router.push('/')">{{ localize.homeBtn }}</btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>