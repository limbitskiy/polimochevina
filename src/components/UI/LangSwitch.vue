<template>
  <ul class="lang-switch">
    <li v-for="language in this.languages" :key="language">
      <span @click="switchLang(language)">{{ language }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LangSwitch",
  methods: {
    switchLang(lang) {
      this.$store.commit("SET_CURRENTLANG", lang);
    },
  },
  computed: {
    languages() {
      return this.$store.state.languages;
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-switch {
  display: flex;
  gap: 0.5rem;
  font-size: var(--font-small);
  margin-inline: 1rem;

  * {
    cursor: pointer;
  }

  .active {
    font-weight: 600;
  }
}
</style>