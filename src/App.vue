<script>
const API_Key = "b933e4ab38909d92d09a5a2221ccd525";
const API_URL = "https://api.themoviedb.org/3/search/movie?query=";

//components
import Header from "./components/Header.vue";

//extras
import axios from "axios";
import store from "./store.js";

export default {
  data() {
    return {
      result: undefined,
      store,
      langs: ["en", "es", "fr", "it", "ja", "ko"],
    };
  },

  components: { Header },

  methods: {
    searchQuery(query) {
      console.log("Searching: " + query);

      if (query.length > 0 && typeof query == "string") {
        axios
          .get(API_URL + query + "&language=it-IT" + "&api_key=" + API_Key)
          .then((resp) => {
            const results = resp.data.results;
            console.table(results);
            const resultsArray = [];
            results.forEach((mov) => {
              const {
                title,
                original_title,
                original_language,
                vote_average,
                release_date,
              } = mov;

              const movie = {
                title: title,
                original_title: original_title,
                original_language: original_language,
                vote_average: vote_average,
                release: release_date,
              };

              resultsArray.push(movie);
            });

            store.movies = resultsArray;
          });
      } else {
        console.log("You can't input an empty query.");
      }
    },

    displayRelease(date) {
      return date != "" ? "(" + date.split("-")[0] + ")" : "";
    },
  },
};
</script>
<template>
  <Header @onForwardQuery="searchQuery" />
  {{ result }}

  <ol>
    <li v-for="movie in store.movies" class="bg-primary">
      <h3>{{ movie.title }} {{ displayRelease(movie.release) }}</h3>
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
</template>
<style lang="scss" scoped>
@use "./assets/scss/style.scss" as *;
</style>
