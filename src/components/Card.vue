<script>
export default {
  data() {
    return {
      langs: ["en", "es", "fr", "it", "ja", "ko"],
      imgURL: "https://image.tmdb.org/t/p/",
      posterSize: "w342",
    };
  },

  props: ["title", "og_title", "lang", "rating", "release", "poster"],

  methods: {
    displayReleaseYear(date) {
      return date != "" ? "(" + date.split("-")[0] + ")" : "";
    },

    getStars(rating) {
      return Math.round(rating / 2);
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

    <img
      v-if="poster"
      :src="this.imgURL + this.posterSize + '/' + poster"
      :alt="title"
    />

    <div
      v-else
      style="width: 342px; height: 513px; background-color: grey"
    ></div>
    <p>
      Vote: {{ rating }}
      <font-awesome-icon
        v-for="star in getStars(rating)"
        :key="star"
        icon="fa-solid fa-star"
      />
    </p>
  </li>
</template>
<style lang="scss" scoped></style>
