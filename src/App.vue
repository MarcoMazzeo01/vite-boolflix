<script>
const API_Key = "b933e4ab38909d92d09a5a2221ccd525";
const moviesAPI = "https://api.themoviedb.org/3/search/movie?query=";
const seriesAPI = "https://api.themoviedb.org/3/search/tv?query=";

//extras
import axios from "axios";
import store from "./store.js";

//components
import Header from "./components/Header.vue";
import List from "./components/List.vue";

export default {
  data() {
    return {
      store,
      movieValues: [
        "title",
        "original_title",
        "original_language",
        "vote_average",
        "release_date",
      ],

      seriesValues: [
        "name",
        "original_name",
        "original_language",
        "vote_average",
        "first_air_date",
      ],

      aliases: ["title", "og_title", "lang", "rating", "release"],
    };
  },

  components: { Header, List },

  methods: {
    searchQuery(query) {
      if (query.length <= 0 || typeof query != "string") {
        return;
      }
      console.log("Searching: " + query);

      //movies request
      axios
        .get(moviesAPI + query + "&language=it-IT" + "&api_key=" + API_Key)
        .then((resp) => {
          this.store.movies = this.fetchValues(
            resp.data.results,
            this.movieValues
          );
        });

      //series request
      axios
        .get(seriesAPI + query + "&language=it-IT" + "&api_key=" + API_Key)
        .then((resp) => {
          this.store.series = this.fetchValues(
            resp.data.results,
            this.seriesValues
          );
        });
    },

    fetchValues(results, values) {
      const resultsArray = [];

      results.forEach((obj) => {
        const parsedObj = {};

        for (let i = 0; i < values.length; i++) {
          const valueToParse = values[i];
          const matchingAlias = this.aliases[i];

          ({ [valueToParse]: parsedObj[matchingAlias] } = obj); // Computed Property Names
          console.log(parsedObj);
        }

        resultsArray.push(parsedObj);
      });

      return resultsArray;
    },
  },
};
</script>
<template>
  <Header @onForwardQuery="searchQuery" />
  <List />
</template>
<style lang="scss" scoped>
@use "./assets/scss/style.scss" as *;
</style>
