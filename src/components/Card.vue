<script>
export default {
  data() {
    return {
      langs: ["en", "es", "fr", "it", "ja", "ko"],
    };
  },

  props: ["title", "og_title", "lang", "rating", "release"],

  methods: {
    displayReleaseYear(date) {
      return date != "" ? "(" + date.split("-")[0] + ")" : "";
    },
  },
};
</script>
<template>
  <li class="bg-primary">
    <h3>{{ title }} {{ displayReleaseYear(release) }}</h3>
    <h5>{{ og_title }}</h5>
    <img
      v-if="this.langs.includes(lang)"
      :src="'/flags/' + lang + '.svg'"
      :alt="lang"
      style="width: 20px"
    />

    <img v-else src="/flags/unknown.svg" :alt="lang" style="width: 20px" />
    <p>Vote: {{ rating }}</p>
  </li>
</template>
<style lang="scss" scoped></style>
