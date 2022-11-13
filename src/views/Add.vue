<template>
<div>
    <div><NavBar /></div>
    <br>
    <v-form v-model="valid">
        <v-container>
            <v-text-field :rules="Rules" v-model="title" label="Book Title" required ></v-text-field>
            <v-text-field :rules="Rules" v-model="author" label="Book Author" required ></v-text-field>
            <v-text-field :rules="Rules" v-model="year" label="Book Year" required ></v-text-field>
            <v-file-input :rules="Rules" required label="Upload Book Cover" v-model="image" accept="image/*" prepend-icon="mdi-camera-plus" ></v-file-input>
            <br>
            <v-btn class="mr-4" @click="Add()" >ADD</v-btn>
            <v-btn class="mr-4" @click="Back()" >Cancel</v-btn>
        </v-container>
    </v-form>
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
      valid: false,
      Rules: [
        v => !!v || 'Field is required',
      ],
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