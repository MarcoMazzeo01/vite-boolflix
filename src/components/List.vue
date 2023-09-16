<script>
import store from "../store.js";
import Card from "./Card.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { Card },
};
</script>

<template>
  <h2>Movies</h2>
  <ol>
    <Card
      v-for="movie in store.movies"
      :title="movie.title"
      :og_title="movie.og_title"
      :lang="movie.lang"
      :rating="movie.rating"
      :release="movie.release"
    />
  </ol>

  <h2>Series</h2>
  <ol>
    <Card
      v-for="show in store.series"
      :title="show.title"
      :og_title="show.og_title"
      :lang="show.lang"
      :rating="show.rating"
      :release="show.release"
    />
  </ol>
</template>

<style lang="scss" scoped></style>
