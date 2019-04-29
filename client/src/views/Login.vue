<template>
  <div class="login">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row mt-4 main">
        <div class="col-10 offset-1 d-flex justify-content-center">
          <form v-if="loginForm" @submit.prevent="loginUser" class="mt-2">
            <div class="form-group">
              <div class="col-12 d-flex justify-content-center">
                <input class="form-control shadow mb-2" type="email" v-model="creds.email" placeholder="Email..."
                  required>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <input class="form-control shadow" type="password" v-model="creds.password" placeholder="Password..."
                  required>
              </div>
            </div>
            <button class="btn btn-dark shadow mt-1" type="submit">Log In</button>
          </form>
          <form v-else @submit.prevent="register" class="mt-1">
            <div class="form-group">
              <h6 class="text-white">Admin only.</h6>
              <div class="col-12 d-flex justify-content-center">
                <input class="form-control shadow mb-2" type="text" v-model="newUser.userName"
                  placeholder="Enter a username..." required>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <input class="form-control shadow mb-2" type="email" v-model="newUser.email"
                  placeholder="Enter your email..." required>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <input class="form-control shadow" type="password" v-model="newUser.password"
                  placeholder="Create a password...">
              </div>
              <div class="col-12 d-flex justify-content-center mt-2">
                <input class="form-control shadow" type="text" v-model="secret" placeholder="Secret...">
              </div>
              <div class="col-12 d-flex justify-content-center">
                <button :class="{disabled: isDisabled}" :disabled="isDisabled"
                  class="btn btn-dark shadow mt-3 text-white" type="submit">Create account</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col-12 d-flex justify-content-center">
          <div class="action mt-2 mb-5" @click="loginForm = !loginForm">
            <p v-if="loginForm" class="text-light mt-3 log-reg">Register</p>
            <p v-else class="text-light mt-3 log-reg">Log in</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";

  export default {
    name: "login",
    mounted() { },
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          userName: ""
        },
        secret: ""
      };
    },
    computed: {
      isDisabled() {
        if (this.newUser.password.length > 5) {
          return false;
        } else {
          return true;
        }
      }
    },
    methods: {
      register() {
        if (this.secret == "ZadenIsCool") {
          this.$store.dispatch("register", this.newUser);
          this.loginForm = !this.loginForm;
        } else {
          this.newUser.email = ''
          this.newUser.password = ''
          this.newUser.userName = ''
          alert("You don't know the secret. You can't register.");
          this.loginForm = !this.loginForm;
        }
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    },
    components: {
      Navbar
    }
  };
</script>

<style scoped>
  .login {
    background-color: black;
    min-height: 100vh;
    margin-right: -5vw !important;
  }

  .main {
    margin: 0px 0px;
    padding: 0px 0px;
    margin-left: -1.2vw;
  }

  form {
    width: 30%;
  }

  .log-reg {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    .login {
      margin-right: -16vw !important;
    }

    .form-control {
      min-width: 75vw !important;
    }

    .main {
      margin-left: -4.3vw;
    }
  }
</style>