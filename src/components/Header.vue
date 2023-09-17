<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },

  emits: ["onForwardQuery"],
};
</script>

<template>
  <header>
    <div class="logo"><img src="/boolflix_logo.png" alt="logo" /></div>

    <div class="search_bar">
      <input
        type="search"
        placeholder="Cerca film o serie TV..."
        v-model.lazy="searchQuery"
        @keyup.enter="$emit('onForwardQuery', searchQuery)"
      />

      <button type="button" @click="$emit('onForwardQuery', searchQuery)">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
    </div>

    <div class="nav">
      <font-awesome-icon icon="fa-solid fa-heart" />
      <font-awesome-icon icon="fa-solid fa-compass" />
    </div>
  </header>

  <!-- <p class="text-danger">
    {{ searchQuery }}
    <hr v-show="searchQuery" />
  </p> -->
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $header-height;
  padding: 0 5em;
  background-color: $light-bg;
}

.logo {
  justify-self: right;
  flex-basis: 150px;

  img {
    width: 100%;
  }
}

.search_bar {
  flex-basis: 50%;
  height: 50px;

  input {
    border-radius: 50px 0px 00px 50px;
    border-top: $dark-bg 1px solid;
    border-bottom: $dark-bg 1px solid;
    border-left: $dark-bg 1px solid;
    border-right: 0;
    background-color: $dark-bg;
    color: #00000075;
    padding: 10px;
    width: 90%;
    height: 100%;
  }

  input:focus {
    box-shadow: none;
    outline: none;
    border: 0;
  }

  button {
    background-color: $dark-bg;
    border: 0;
    border-radius: 0 50px 50px 0;
    border-top: $dark-bg 1px solid;
    border-bottom: $dark-bg 1px solid;
    border-right: $dark-bg 1px solid;
    border-left: 0;
    padding: 10px;
    padding-right: 30px;
    color: $secondary-accent;
    width: 10%;
    height: 100%;
    text-align: end;
  }
}

.nav {
  color: $secondary-accent;
  font-size: 2em;
  gap: 15px;
}
</style>
