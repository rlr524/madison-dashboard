<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Main msg="This is the Madison Dashboard" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  components: {
    Main,
    HelloWorld,
  },
};
</script>
