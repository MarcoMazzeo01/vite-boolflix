<script>
export default {
  data() {
    return {
      langs: ["en", "es", "fr", "it", "ja", "ko"],
      imgURL: "https://image.tmdb.org/t/p/",
      posterSize: "w342",
    };
  },

  props: [
    "title",
    "og_title",
    "lang",
    "rating",
    "release",
    "poster",
    "overview",
  ],

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
  <li
    :style="{
      'background-image': 'url(' + imgURL + posterSize + '/' + poster + ')',
    }"
  >
    <div class="card_container">
      <h3>{{ title }} {{ displayReleaseYear(release) }}</h3>
      <h5>{{ og_title }}</h5>
      <img
        v-if="this.langs.includes(lang)"
        :src="'/flags/' + lang + '.svg'"
        :alt="lang"
        style="width: 20px"
      />
      <img v-else src="/flags/unknown.svg" :alt="lang" style="width: 20px" />

      <p>Descrizione: {{ overview }}</p>
      <!-- <img
        v-if="poster"
        :src="this.imgURL + this.posterSize + '/' + poster"
        :alt="title"
      /> -->
      <!-- <div
        v-else
        style="width: 342px; height: 513px; background-color: grey"
      ></div> -->
      <p>
        Vote: {{ rating }}
        <font-awesome-icon
          v-for="star in getStars(rating)"
          :key="star"
          icon="fa-solid fa-star"
          class="rating_star"
        />
      </p>
    </div>
  </li>
</template>
<style lang="scss" scoped>
li {
  display: block;
  flex-basis: calc(100% / 5 - 10px);
  max-width: calc(100% / 5 - 10px);
  background-size: cover;
  padding: 0;
  margin: 0;
  aspect-ratio: 0.666;
  background-color: $secondary-accent;

  .card_container {
    visibility: hidden;
    overflow-y: auto;
    height: 100%;
    background-color: $dark-bg;
    padding: 1em;
  }
}

li:hover > .card_container {
  visibility: visible;
}

.rating_star {
  color: $main-accent;
}
</style>
