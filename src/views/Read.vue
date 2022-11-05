<template>
<div>
  <div><NavBar /></div>
  <br>
  <v-row ><List v-for="Book in Books"
            :key="Book.id"
            :id="Book.id"
            :title="Book.title"
            :author="Book.author"
            :year="Book.year"
            :image="Book.image"
            :type="2"/>
  </v-row>
</div>
</template>

<script>
  import NavBar from "@/components/NavBar.vue";
  import List from "@/components/List.vue";
  import axios from "axios";
  export default {
  components: {
      NavBar,
      List
    },
  data: () => ({
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
        url: "http://127.0.0.1:8000/api/read_books",
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