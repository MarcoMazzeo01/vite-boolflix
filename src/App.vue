<script>
const API_Key = "b933e4ab38909d92d09a5a2221ccd525";
const moviesAPI = "https://api.themoviedb.org/3/search/movie?query=";
const seriesAPI = "https://api.themoviedb.org/3/search/tv?query=";

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
        //movies request
        axios
          .get(moviesAPI + query + "&language=it-IT" + "&api_key=" + API_Key)
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

        //series request
        axios
          .get(seriesAPI + query + "&language=it-IT" + "&api_key=" + API_Key)
          .then((resp) => {
            const results = resp.data.results;
            console.table(results);
            const resultsArray = [];
            results.forEach((show) => {
              const {
                name,
                original_name,
                original_language,
                vote_average,
                first_air_date,
              } = show;

              const showObj = {
                title: name,
                original_title: original_name,
                original_language: original_language,
                vote_average: vote_average,
                release: first_air_date,
              };

              resultsArray.push(showObj);
            });

            store.series = resultsArray;
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

  <h2>Movies</h2>
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

  <h2>Series</h2>
  <ol>
    <li v-for="show in store.series" class="bg-warning">
      <h3>{{ show.title }} {{ displayRelease(show.release) }}</h3>
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
<style lang="scss" scoped>
@use "./assets/scss/style.scss" as *;
</style>
