<template>
  <div class="home" id="home">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-12 col-md-6 offset-md-1 d-flex justify-content-center">
          <div class="col-12 my-5 mt-md-0 d-flex justify-content-start stories">
            <!-- put cards here -->
            <ul class="ml-0 ml-md-4">
              <li v-for="story in stories" :key="story._id" class="text-white">
                {{story.title}} <img :src="story.image" alt="">
                <span class="ml-1 ml-md-3">{{story.createdAt | formatTime}}</span>
                <i class="fas fa-trash text-light ml-2 ml-md-4" @click="deleteStory(story)"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import Moment from "moment";

  export default {
    name: "home",
    props: [],
    mounted() {
      this.adminUser()
      this.getStories();
    },
    data() {
      return {

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
      adminUser() {
        if (this.user._id) {
        }
      },
      getStories() {
        this.$store.dispatch("getStories");
      },
    },
    components: {
      Navbar
    },
    filters: {
      formatTime(date) {
        if (Moment(String(date)).format("LT, L") == "Invalid date") {
          return "Just now";
        } else {
          return Moment(String(date)).format("L");
        }
      }
    }
  };
</script>

<style scoped>
  template {
    overflow-x: hidden !important;
  }

  #home {
    min-height: 100vh;
    min-width: 100% !important;
    background-color: black;
    overflow-x: hidden !important;
  }
</style>