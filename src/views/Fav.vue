<template>
  <div>
    <div><NavBar /></div>
    <br>
    <v-row>   
        <div v-for="Book in Books" v-bind:key="Book.id" style="margin-right: 10px; margin-left: 10px;">
            <v-col  class="d-flex child-flex" cols="4"> 
                
            <v-card class="mx-auto" max-width="290px" max-height="500px" >
            <v-img v-bind:src="`http://127.0.0.1:8000/book_images/${Book.image}`" width="250px" height="370px"  ></v-img>
            <v-card-title>
                {{Book.title}}
            </v-card-title>
            <v-card-subtitle>
                {{Book.author}} - {{Book.year}}
            </v-card-subtitle>
            <v-card-actions>
                <v-btn v-on:click="removeFromFav(Book.id)" color="red" text>
                    <v-icon>mdi-delete</v-icon>
                    Remove From Fav List
                </v-btn>
            </v-card-actions>
            </v-card>

            </v-col>
        </div>
    </v-row>
    <v-alert dismissible v-show="show_delete" color="red" type="success">Book Deleted Successfully</v-alert>
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
      },
      show_delete: false
  }),
  methods: {
    getBooks() {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/fav_books",
      }).then((response) => {
          this.Books = response.data;
      });
    },
    removeFromFav(id) {
        axios({
            method: "delete",
            url: `${"http://127.0.0.1:8000/api/delete_fav_book/"}${id}`,
        }).then(() => {
            this.show_delete = true;
            window.location.reload()
        });
    },
  },
  created() {
    this.getBooks()
  },
  }
</script>