<script>
const API_Key = "b933e4ab38909d92d09a5a2221ccd525";
const API_URL = "https://api.themoviedb.org/3/search/movie?query=";

//components
import Header from "./components/Header.vue";

//extras
import axios from "axios";

export default {
  data() {
    return {
      result: undefined,
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
            const results = resp.data.results[0];
            console.log(results);
            this.result = results;

            const { title, original_title, original_language, vote_average } =
              results;
            console.log(title, original_title, original_language, vote_average);
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
  {{ result }}
</template>
<style lang="scss" scoped>
@use "./assets/scss/style.scss" as *;
</style>
