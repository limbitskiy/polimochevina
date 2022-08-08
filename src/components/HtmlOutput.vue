<script>
export default {
  name: "HtmlOutput",
  props: ["data"],
};
</script>

<template>
  <p v-html="this.data"></p>
</template>

<style lang="scss" scoped>
p {
  line-height: 1.5;
  margin-block: 2rem;
}
</style>