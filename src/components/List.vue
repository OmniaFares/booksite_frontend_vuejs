<template>
<div>
    <v-col  class="d-flex child-flex" cols="4">
    <v-card class="mx-auto" max-width="250px" max-height="500px" >
      <v-img v-bind:src="`http://127.0.0.1:8000/book_images/${image}`" width="250px" height="370px"  ></v-img>

      <v-card-title>
        {{title}}
      </v-card-title>

      <v-card-subtitle>
        {{author}}
      </v-card-subtitle>

      <v-card-actions v-show="type">
        <v-btn  v-on:click="addToRead(id)" color="red" text>
          READ
        </v-btn>
        <v-btn  v-on:click="addToWantToRead(id)" color="red" text>
          Want TO READ
        </v-btn>
      </v-card-actions>

    </v-card>
    </v-col>
    <v-alert dismissible v-show="show" type="success">Book Added Successfully</v-alert>
</div>
</template>

<script>
  import axios from "axios";
  export default {
    components: {
    },
    data: () => ({
        show: false,
    }),
    name: "List",
    props: ["id", "title", "author", "year", "image","type"],
    methods: {
        addToRead(id) {
            axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/add_read_book",
                data: {
                    book_id: id, // This is the body part
                },
            }).then(() => {
                this.show = true;
            });
        },
        addToWantToRead(id) {
            axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/add_want_to_read_book",
                data: {
                    book_id: id, // This is the body part
                },
            }).then(() => {
                this.show =true;
            });
        },

    
    },
    created() {
    },
  }
</script>