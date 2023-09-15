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
  <div class="input-group">
    <input
      type="search"
      class="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
      v-model.lazy="searchQuery"
      @keyup.enter="$emit('onForwardQuery', searchQuery)"
    />
    <button
      type="button"
      class="btn btn-outline-primary"
      @click="$emit('onForwardQuery', searchQuery)"
    >
      Search
    </button>
  </div>

  {{ searchQuery }}
</template>

<style scoped></style>
