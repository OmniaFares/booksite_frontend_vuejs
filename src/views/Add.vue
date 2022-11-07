<template>
<div>
    <div><NavBar /></div>
    <br>
    <form>
        <v-container>
            <v-text-field v-model="title" label="Book Title" required ></v-text-field>
            <v-text-field v-model="author" label="Book Author" required ></v-text-field>
            <v-text-field v-model="year" label="Book Year" required ></v-text-field>
            <v-file-input required label="Upload Book Cover" v-model="image" accept="image/*" prepend-icon="mdi-camera-plus" ></v-file-input>
            <br>
            <v-btn class="mr-4" @click="Add()" >ADD</v-btn>
            <v-btn class="mr-4" @click="Back()" >Cancel</v-btn>
        </v-container>
    </form>
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  components: {
    NavBar,
  },
  data(){
    return{
      title: "",
      author: "",
      year: "",
      image: ""
    }
  },
  methods: {
    Add() {
        const fd = new FormData();
        fd.append("image", this.image);
        fd.append("title", this.title);
        fd.append("author", this.author);
        fd.append("year", this.year);
        axios
          .post("http://127.0.0.1:8000/api/add_book", fd)
          .then(() => {
             this.$router.push({ name: "Home" });
          })
          .catch(() => {});
    },
    Back() {
     this.$router.push({ name: "Home" });
    }
  },
  created() {
   
  },
};
</script>