<template>
  <div>
    <div><NavBar /></div>
    <br>
    <v-row>   
    <div v-for="Book in Books" v-bind:key="Book.id" style="margin-right: 10px; margin-left: 10px;">
      <v-col  class="d-flex child-flex" cols="4"> 

      <v-card class="mx-auto" max-width="250px" max-height="500px" >
        <v-img v-bind:src="`http://127.0.0.1:8000/book_images/${Book.image}`" width="250px" height="370px"  ></v-img>
        <v-card-title>
          {{Book.title}}
        </v-card-title>
        <v-card-subtitle>
          {{Book.author}} - {{Book.year}}
        </v-card-subtitle>
        <v-card-actions>
          <v-btn v-show="!Book.is_fav" v-on:click="addToFav(Book.id)" color="red" text>
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
           <v-btn v-show="Book.is_fav" color="red" text>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn @click="UpdateBook(Book.id)" color="red" text>
             <v-icon left>mdi-pencil</v-icon>
          </v-btn>
          <v-btn @click="DeleteBook(Book.id)" color="red" text>
              <v-icon left>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      </v-col>
      </div>
    </v-row>
  <v-alert dismissible v-show="show_add" type="success">Book Added Successfully</v-alert>
  <a class="btn mt-2">
      <v-btn @click="AddBook()" class="btn badge-danger">
        <v-icon>mdi-plus</v-icon>
           Add Book
      </v-btn>
  </a>
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
      Books: [],
      Book: {
        title: "",
        author: "",
        id: "",
        year: "",
        image: "",
        is_fav: null
      },
      show_add: false
  }),
  methods: {
    getBooks() {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/books",
      }).then((response) => {
          this.Books = response.data;
      });
    },
    addToFav(id) {
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/add_fav_book",
            data: {
              book_id: id,
            },
        }).then(() => {
            this.show_add = true;
            window.location.reload()
        });
    },
    AddBook(){
        this.$router.push({ name: "Add"});
    },
    UpdateBook(id){
        this.$router.push({ name: "Update", params: { id: id}});
    },
    DeleteBook(id) {
        axios({
            method: "delete",
            url: `${"http://127.0.0.1:8000/api/delete_book/"}${id}`,
          }).then(() => {
            window.location.reload()
          });
    }

  },
  created() {
    this.getBooks()
  },
  }
</script>