<script>
const API_Key = "b933e4ab38909d92d09a5a2221ccd525";
const moviesAPI = "https://api.themoviedb.org/3/search/movie?query=";
const seriesAPI = "https://api.themoviedb.org/3/search/tv?query=";

//extras
import axios from "axios";
import store from "./store.js";

//components
import Header from "./components/Header.vue";
import Cards from "./components/Cards.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { Header, Cards },

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

            this.store.movies = resultsArray;
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

            this.store.series = resultsArray;
          });
      } else {
        console.log("You can't input an empty query.");
      }
    },
  },
};
</script>
<template>
  <Header @onForwardQuery="searchQuery" />
  <Cards />
</template>
<style lang="scss" scoped>
@use "./assets/scss/style.scss" as *;
</style>
