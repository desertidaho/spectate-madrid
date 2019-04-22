<template>
  <div class="write">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-12 col-md-6 offset-md-1 d-flex justify-content-center">
          <form @submit.prevent="submit()">
            <div class="col-12">
              <input
                v-model="newStory.title"
                type="text"
                class="form-control"
                id
                placeholder="Title of new story"
              >
            </div>
            <div class="col-12 mt-2">
              <input
                v-model="newStory.image"
                type="text"
                class="form-control"
                id
                placeholder="Image UrL..."
              >
            </div>
            <div class="col-12 mt-2">
              <textarea
                v-model="newStory.story"
                type="text"
                class="form-control story"
                id
                placeholder="Story..."
              ></textarea>
            </div>
            <div class="col-12 mt-3">
              <button type="submit" class="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
        <div class="col-12 col-md-5 my-5 mt-md-0 d-flex justify-content-start stories">
          <ul class="ml-0 ml-md-4">
            <li v-for="story in stories" :key="story._id" class="text-white">{{story.title}}</li>
          </ul>
        </div>
        <button class="btn btn-sm btn-outline-primary shadow mt-2 home" @click="home()">Home</button>
        <button class="btn btn-sm btn-outline-danger shadow mt-2 logout" @click="logout()">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "write",
  props: [],
  mounted() {
    this.getStories();
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
    logout() {
      this.$store.dispatch("logout");
    },
    home() {
      this.$router.push({ name: "home" });
    },
    submit() {
      let newStory = this.newStory;
      this.$store.dispatch("newStory", newStory);
      this.newStory = {};
    },
    getStories() {
      this.$store.dispatch("getStories");
    }
  },
  components: {
    Navbar
  }
};
</script>

<style scoped>
.write {
  min-height: 100vh;
  background-color: black;
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

.home {
  position: absolute;
  top: 0.3rem;
  left: 0.8rem;
}

.logout {
  position: absolute;
  top: 0.3rem;
  right: 0.8rem;
}

@media only screen and (max-width: 768px) {
  li {
    margin-left: -8vw;
  }
}
</style>
