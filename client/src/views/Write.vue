<template>
  <div class="write">
    <h1>Write!</h1>
    <button class="btn btn-dark shadow mt-1" @click="logout()">Logout</button>
  </div>
</template>

<script>
export default {
  name: "write",
  props: [],
  data() {
    return {};
  },
  computed: {},
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  components: {}
};
</script>