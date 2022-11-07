<template>
<div>
    <div><NavBar /></div>
    <br>
    <form>
        <v-container>
            <v-text-field v-model="title" label="Book Title" required ></v-text-field>
            <v-text-field v-model="author" label="Book Author" required ></v-text-field>
            <v-text-field v-model="year" label="Book Year" required ></v-text-field>
            <v-img v-bind:src="`http://127.0.0.1:8000/book_images/${image}`" width="250px" height="370px"  ></v-img>
            <v-file-input label="Upload Book Cover" v-model="image" accept="image/*" prepend-icon="mdi-camera-plus" ></v-file-input>
            <br>
            <v-btn class="mr-4" @click="Save()" >Save Changes</v-btn>
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
      id:"",
      title: "",
      author: "",
      year: "",
      image: ""
    }
  },
  methods: {
    getBook(id){
      axios({
        method: "get",
        url: `${"http://127.0.0.1:8000/api/book/"}${id}`,
        params: {
          id: id,
        },
      }).then((response) => {
        this.title = response.data.title;
        this.author = response.data.author;
        this.year = response.data.year;
        this.image = response.data.image;
      });
    },
    Save() {
        const fd = new FormData();
        fd.append("image", this.image);
        fd.append("title", this.title);
         fd.append("id", this.id);
        fd.append("author", this.author);
        fd.append("year", this.year);
        axios
          .post("http://127.0.0.1:8000/api/update_book", fd)
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
    this.id = this.$route.params.id;
    this.getBook(this.$route.params.id);
  },
};
</script>