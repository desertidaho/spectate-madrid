<template>
  <div class="write">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-12 col-md-6 offset-md-1 d-flex justify-content-center">
          <form @submit.prevent="submit()">
            <div class="col-12">
              <input v-model="newStory.title" type="text" class="form-control" id placeholder="Title of new story">
            </div>
            <div class="col-12 mt-2">
              <input v-model="newStory.image" type="text" class="form-control" id placeholder="Image URL...">
            </div>
            <div class="col-12 mt-2">
              <textarea v-model="newStory.story" type="text" class="form-control story" id
                placeholder="Story..."></textarea>
            </div>
            <div class="col-12 mt-3 text-left">
              <button type="submit" class="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
        <div class="col-12 col-md-5 my-5 mt-md-0 d-flex justify-content-start stories">
          <ul class="ml-0 ml-md-4 text-left">
            <li v-for="story in stories" :key="story._id" class="text-white">
              {{story.title}}
              <span class="ml-1 ml-md-3">{{story.createdAt | formatTime}}</span>
              <i class="fas fa-trash text-light ml-2 ml-md-4" @click="deleteStory(story)"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import Moment from "moment";

  export default {
    name: "write",
    props: [],
    mounted() {
      this.getStories();
      if (!this.user._id) {
        this.$router.push({ name: "home" });
      }
    },
    data() {
      return {
        newStory: {
          title: "",
          image: "",
          story: ""
        }
      };
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      stories() {
        return this.$store.state.stories;
      }
    },
    methods: {
      submit() {
        let newStory = this.newStory;
        this.$store.dispatch("newStory", newStory);
        this.newStory = {};
      },
      getStories() {
        this.$store.dispatch("getStories");
      },
      deleteStory(story) {
        this.$store.dispatch("deleteStory", story);
      }
    },
    components: {
      Navbar
    },
    filters: {
      formatTime(date) {
        if (Moment(String(date)).format("LT, L") == "Invalid date") {
          return "Just now";
        } else {
          return Moment(String(date)).format("LL");
        }
      }
    }
  };
</script>

<style scoped>
  .write {
    min-height: 110vh;
    background-color: black;
    margin-left: 1vw;
  }

  form {
    min-width: 100% !important;
  }

  .story {
    min-height: 30vh;
  }

  .stories {
    background-color: black;
  }

  li {
    list-style: none;
  }

  .fa-trash {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    li {
      margin-left: -8vw;
    }
  }
</style>