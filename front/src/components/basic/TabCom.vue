<template>
  <v-card>
    <v-tabs
      background-color="deep-purple-darken-4"
      center-active
    >
      <v-tab :to="path[0]">Home</v-tab>
      <v-tab :to="path[1]">Quiz</v-tab>
      
    </v-tabs>
  </v-card>
</template>

<script>

export default {

data: () => ({


      path:[
        "/", "/quiz",
        ]
    //
  }),
  
}
</script>

<style>

</style>