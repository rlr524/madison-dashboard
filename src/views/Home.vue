<template>
  <div class="home">
    <Main msg="This is the Madison Dashboard" />
    <div class="container">
      <Today />
      <Chores />
    </div>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Today from "@/components/Today.vue";
import Chores from "@/components/Chores.vue";

export default {
  name: "Home",
  components: {
    Main,
    Today,
    Chores
  }
};
</script>
