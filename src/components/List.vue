<script>
import store from "../store.js";
import Card from "./Card.vue";

export default {
  data() {
    return {
      store,
    };
  },

  props: ["showMovies", "showSeries"],

  components: { Card },
};
</script>

<template>
  <main>
    <div class="container-fluid">
      <!-- <div class="container-fluid">
        Movies Series

        <select name="genres" id="genres" class="selectpicker">
          <option value="1">Test</option>
        </select>
      </div> -->

      <div v-show="showMovies">
        <h2>Movies</h2>
        <ol>
          <Card
            v-for="movie in store.movies"
            :title="movie.title"
            :og_title="movie.og_title"
            :lang="movie.lang"
            :rating="movie.rating"
            :release="movie.release"
            :poster="movie.poster"
            :overview="movie.overview"
          />
        </ol>
      </div>

      <div v-show="showSeries">
        <h2>Series</h2>
        <ol>
          <Card
            v-for="show in store.series"
            :title="show.title"
            :og_title="show.og_title"
            :lang="show.lang"
            :rating="show.rating"
            :release="show.release"
            :poster="show.poster"
            :overview="show.overview"
          />
        </ol>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: calc(100vh - $header-height);
  background-color: $dark-bg;
  padding: 0 4em;
}

main > .container-fluid {
  background-color: $light-bg;
  height: 100%;
  padding: 2em;
  overflow: auto;
}

ol {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
