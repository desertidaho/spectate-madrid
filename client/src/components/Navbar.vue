<template>
  <div class="navbar">
    <div class="row">
      <div class="col-4 d-flex justify-content-center align-items-center">
        <img class="soccerball" src="@/assets/soccerball.jpg">
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <img class="logo my-4" src="@/assets/spectate-logo.png">
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <img class="soccerball" src="@/assets/soccerball.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: [],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>

<style>
.navbar {
  background-color: black;
}

.row {
  width: 100vw;
}

.logo {
  height: 25vh;
  width: auto;
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
