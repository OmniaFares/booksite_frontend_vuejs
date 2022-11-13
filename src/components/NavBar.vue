<template>
    <v-toolbar dark>
      <img class="dark mr-5" :src="require('@/assets/navbar2.png')"  height="100" width="200"/>
      
      <v-toolbar-title>Books</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs centered >
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab v-on:click="home()"> Home </v-tab>
          <v-tab v-on:click="getFavBooks()"> Favourites </v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
      
  </v-toolbar>
</template>


<script >
  export default {
     data () {
      return {
      }
     },
    methods: {
      getFavBooks(){
        this.$router.push({ name: "Fav"});
      },
      home(){
        this.$router.push({ name: "Home"});
      },
    },
    created() {
    }
  }
  </script>


        