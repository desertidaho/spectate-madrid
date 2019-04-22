<template>
  <div class="navbar">
    <div class="row">
      <div class="col-4 d-flex justify-content-center align-items-center">
        <!-- <img class="soccerball" src="@/assets/soccerball.jpg"> -->
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <img class="logo my-4" src="@/assets/spectate-logo.png">
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <!-- <img class="soccerball" src="@/assets/soccerball.jpg"> -->
      </div>
    </div>
    <button v-if="!atHome" class="btn btn-sm btn-outline-primary shadow mt-2 home" @click="home()">Home</button>
    <button v-if="atHome && user._id" class="btn btn-sm btn-outline-primary shadow mt-2 home"
      @click="write()">Write</button>
    <button v-if="user._id" class="btn btn-sm btn-outline-danger shadow mt-2 logout" @click="logout()">Logout</button>
    <button v-if="!user._id && !atLogin" class="btn btn-sm btn-outline-secondary shadow mt-2 logout"
      @click="login()">Login</button>
  </div>
</template>

<script>
  export default {
    name: "navbar",
    props: [],
    mounted() {
      if (this.$route.name == 'home') {
        this.atHome = true
      }
      if (this.$route.name == 'login') {
        this.atLogin = true
      }
      if (this.$route.name == 'write') {
        this.atDashboard = true
      }
    },
    data() {
      return {
        atHome: false,
        atLogin: false,
        atWrite: false
      };
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      logout() {
        this.$store.dispatch("logout");
      },
      home() {
        this.$router.push({ name: "home" });
      },
      login() {
        this.$router.push({ name: "login" });
      },
      write() {
        this.$router.push({ name: "write" });
      },
    },
    components: {}
  };
</script>

<style>
  .navbar {
    background-color: black;
    overflow-x: hidden;
  }

  .row {
    width: 100vw;
  }

  .logo {
    height: 25vh;
    width: auto;
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

  .soccerball {
    height: 20vh;
    width: auto;
  }

  @media only screen and (max-width: 768px) {
    .soccerball {
      display: none;
    }
  }
</style>