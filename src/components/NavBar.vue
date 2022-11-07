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

      <div style="display:inline margin-right: 10rem;" v-show="show"> 
        <label style="margin-right: 0.3rem;" class ="btn badge-danger">Search by</label> 
        <select style="background-color: #e9ecef; margin-right: 0.3rem; width:200px;"> 
            <option> Book Name</option> 
            <option> Author </option>  
        </select> 
        <div style="display:inline"> 
            <input type ="text" style="background-color: #e9ecef; margin-right: 0.3rem;">
            <button class ="btn badge-danger" style="margin-right: 0.3rem;" >Go</button> 
            <button class ="btn badge-danger">All</button> 
        </div>
       </div>
       
      <v-btn style="margin-right: 1rem;" @click="show = !show" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      
  </v-toolbar>
</template>


<script >
  export default {
     data () {
      return {
        show: false,
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


        