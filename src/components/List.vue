<template>
<div style="margin-right: 10px; margin-left: 10px;">
    <v-col  class="d-flex child-flex" cols="4">
    <v-card class="mx-auto" max-width="250px" max-height="500px" >
      <v-img v-bind:src="`http://127.0.0.1:8000/book_images/${image}`" width="250px" height="370px"  ></v-img>

      <v-card-title>
        {{title}}
      </v-card-title>

      <v-card-subtitle>
        {{author}}
      </v-card-subtitle>

      <v-card-actions v-show="type==1">
        <v-btn  v-on:click="addToRead(id)" color="red" text>
          READ
        </v-btn>
        <v-btn  v-on:click="addToWantToRead(id)" color="red" text>
          Want TO READ
        </v-btn>
      </v-card-actions>

      <v-card-actions v-show="type==2">
        <v-btn  v-on:click="removeFromRead(id)" color="red" text>
          Remove From Read List
        </v-btn>
      </v-card-actions>

      <v-card-actions v-show="type==3">
        <v-btn  v-on:click="removeFromWantToRead(id)" color="red" text>
           Remove From Want To Read List
        </v-btn>
      </v-card-actions>

    </v-card>
    </v-col>
    <v-alert dismissible v-show="show_add" type="success">Book Added Successfully</v-alert>
    <v-alert dismissible v-show="show_delete" color="red" type="success">Book Deleted Successfully</v-alert>
</div>
</template>

<script>
  import axios from "axios";
  export default {
    components: {
    },
    data: () => ({
        show_add: false,
        show_delete: false
    }),
    name: "List",
    props: ["id", "title", "author", "year", "image","type"],
    methods: {
        addToRead(id) {
            axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/add_read_book",
                data: {
                    book_id: id,
                },
            }).then(() => {
                this.show_add = true;
            });
        },
        addToWantToRead(id) {
            axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/add_want_to_read_book",
                data: {
                    book_id: id,
                },
            }).then(() => {
                this.show_add =true;
            });
        },
        removeFromRead(id) {
            axios({
                method: "delete",
                url: `${"http://127.0.0.1:8000/api/delete_read_book/"}${id}`,
            }).then(() => {
                this.show_delete = true;
                window.location.reload()
            });
        },
        removeFromWantToRead(id) {
            axios({
                method: "delete",
                url:  `${"http://127.0.0.1:8000/api/delete_want_to_read_book/"}${id}`,
            }).then(() => {
                this.show_delete =true;
                window.location.reload()
            });
        },

    
    },
    created() {
    },
  }
</script>