<template>
  <div class="home" id="home">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row mt-2">
        <div class="col-12 col-md-6 offset-md-3 d-flex justify-content-center">
          <div class="col-12 my-5 mt-md-0 d-flex justify-content-start stories">
            <!-- put cards here -->
            <div class="row">
              <div class="card col-12 mb-4 px-0 mr-0" v-for="story in stories" :key="story._id">
                <img class="card-img-top img-fluid" :src="story.image" alt="Card image cap">
                <div class="card-body text-left">
                  <h4 class="card-title">{{story.title}}</h4>
                  <p class="card-text">{{story.story}}</p>
                  <!-- <a href="#!" class="btn btn-primary">Go somewhere</a> -->
                </div>
                <p class="ml-1 ml-md-3">{{story.createdAt | formatTime}}</p>
              </div>
            </div>
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
    this.adminUser();
    this.getStories();
  },
  data() {
    return {};
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
        return Moment(String(date)).format("L");
      }
    }
  }
};
</script>

<style scoped>
#home {
  background-color: black;
  margin-left: -1vw;
  max-width: 100%;
}

.img-fluid {
  width: 100vw;
  object-fit: cover;
}

@media only screen and (max-width: 768px) {
  #home {
    margin-left: -3vw;
  }
}
</style>