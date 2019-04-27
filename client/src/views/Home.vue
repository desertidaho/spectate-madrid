<template>
  <div class="home" id="home">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <a href="https://twitter.com/spectatemadrid" target="_blank"><i
              class="fab fa-twitter text-primary fa-2x mb-3"></i></a>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-10 offset-1 col-md-10 offset-md-1 d-flex justify-content-center">
          <div class="card-columns">
            <div class="card col-12 mb-4 px-0 mr-0" v-for="story in stories" :key="story._id">
              <img class="card-img-top img-fluid" :src="story.image" alt="Card image cap">
              <div class="card-body text-left">
                <h5 class="card-title">{{story.title}}</h5>
                <p class="card-text">{{story.story}}</p>
              </div>
              <p class="ml-1 ml-md-3 time">{{story.createdAt | formatTime}}<a
                  href="http://www.twitter.com/share?u=spectatemadrid.com" target="_blank"><i
                    class="fab fa-twitter twitter ml-3"></i></a></p>
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
          return Moment(String(date)).format("LL");
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

  .card-columns {
    column-count: 3;
  }

  .img-fluid {
    max-width: 93vw;
    object-fit: cover;
    border-bottom: 2px solid white;
  }

  .card {
    width: 93vw;
    border: 2px solid white;
    box-shadow: 2px 3px rgb(134, 134, 134);
  }

  .card,
  .time {
    background-color: white;
    color: black;
  }

  p {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 768px) {
    #home {
      margin-left: -3vw;
    }

    .card-columns {
      column-count: 1;
    }
  }
</style>