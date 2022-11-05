<template>
    <v-toolbar dark>
      <img class="dark mr-5" :src="require('@/assets/navbar2.png')"  height="100" width="200"/>
      <v-spacer></v-spacer>

      <div style="display:inline margin-right: 10rem;" v-show="show"> 
        <label style="margin-right: 0.3rem;" class ="btn badge-danger">Search by</label> 
        <select style="background-color: #e9ecef; margin-right: 0.3rem; width:200px;font-family: cursive; "> 
            <option> Book Name</option> 
            <option> Author </option>  
        </select> 
        <div style="display:inline"> 
            <input type ="text" style="background-color: #e9ecef; margin-right: 0.3rem;">
            <button class ="btn badge-danger" style="margin-right: 0.3rem;" >Go</button> 
            <button class ="btn badge-danger">All</button> 
        </div>
       </div>
      <v-btn  @click="show = !show" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn  v-on:click="home()" icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="white" v-bind="attrs" v-on="on" >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link>
            <v-button v-on:click="getReadBooks()">Read</v-button>
          </v-list-item>

          <v-list-item link>
            <v-button v-on:click="getWantToReadBooks()">Want to Read</v-button>
          </v-list-item>
        </v-list>
      </v-menu>
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
      getReadBooks(){
        this.$router.push({ name: "Read"});
      },
      getWantToReadBooks(){
        this.$router.push({ name: "WantToRead"});
      },
      home(){
        this.$router.push({ name: "Home"});
      },
    },
    created() {
    }
  }
  </script>


        