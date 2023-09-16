<script>
import store from "../store.js";

export default {
  data() {
    return {
      store,
      langs: ["en", "es", "fr", "it", "ja", "ko"],
    };
  },

  methods: {
    displayReleaseYear(date) {
      return date != "" ? "(" + date.split("-")[0] + ")" : "";
    },
  },
};
</script>

<template>
  <h2>Movies</h2>
  <ol>
    <li v-for="movie in store.movies" class="bg-primary">
      <h3>{{ movie.title }} {{ displayReleaseYear(movie.release) }}</h3>
      <h5>{{ movie.original_title }}</h5>
      <img
        v-if="this.langs.includes(movie.original_language)"
        :src="'/flags/' + movie.original_language + '.svg'"
        :alt="movie.original_language"
        style="width: 20px"
      />

      <img
        v-else
        src="/flags/unknown.svg"
        :alt="movie.original_language"
        style="width: 20px"
      />
      <p>Vote: {{ movie.vote_average }}</p>
    </li>
  </ol>

  <h2>Series</h2>
  <ol>
    <li v-for="show in store.series" class="bg-warning">
      <h3>{{ show.title }} {{ displayReleaseYear(show.release) }}</h3>
      <h5>{{ show.original_title }}</h5>
      <img
        v-if="this.langs.includes(show.original_language)"
        :src="'/flags/' + show.original_language + '.svg'"
        :alt="show.original_language"
        style="width: 20px"
      />

      <img
        v-else
        src="/flags/unknown.svg"
        :alt="show.original_language"
        style="width: 20px"
      />
      <p>Vote: {{ show.vote_average }}</p>
    </li>
  </ol>
</template>

<style lang="scss" scoped></style>
