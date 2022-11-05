<template>
<div>
  <div><NavBar /></div>
  <br>
  <v-row>
    <v-col v-for="Book in Books" v-bind:key="Book.id" class="d-flex child-flex" cols="4">

    <v-card class="mx-auto" max-width="250px" max-height="500px" >
      <v-img v-bind:src="`http://127.0.0.1:8000/book_images/${Book.image}`" width="250px" height="370px"  ></v-img>

      <v-card-title>
        {{Book.title}}
      </v-card-title>

      <v-card-subtitle>
        {{Book.author}}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="red" text>
          READ
        </v-btn>
        <v-btn color="red" text>
          Want TO READ
        </v-btn>
      </v-card-actions>

    </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
  import NavBar from "@/components/NavBar.vue";
  import axios from "axios";
  export default {
    components: {
      NavBar,
    },
    data: () => ({
    show: false,
    Books: [],
    Book: {
      title: "",
      author: "",
      id: "",
      year: "",
      image: "",
    },
  }),
  methods: {
    getBooks() {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/books",
      }).then((response) => {
          this.Books = response.data;
      });
    }
  },
  created() {
    this.getBooks()
  },
  }
</script>