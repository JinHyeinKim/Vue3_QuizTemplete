<template>
  <v-container>
  <div class="d-flex flex-column justify-space-between align-center">
    <v-slider
      v-model="width"
      color="red"
      class="align-self-stretch"
      min="300"
      max="500"
      step="1"
    ></v-slider>

    <v-img
      :aspect-ratio="16/9"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
  </div>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      width: 100,
    }),
  }
</script>
