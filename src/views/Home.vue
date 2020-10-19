<template>
  <div class="home">
    <Main msg="This is the Madison Dashboard" />
    <div class="container">
      <div class="row">
        <div class="col-md section">
          <Today />
        </div>
        <div class="col-md section">
          <Chores />
        </div>
      </div>
      <div class="row">
        <div class="col-md section">
          <Assignments />
        </div>
        <div class="col-md section">
          <Grades />
        </div>
      </div>
      <div class="row">
        <div class="col-md section">
          <Behavior />
        </div>
        <div class="col-md section">
          <Allowance />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Today from "@/components/Today.vue";
import Chores from "@/components/Chores.vue";
import Assignments from "@/components/Assignments.vue";
import Grades from "@/components/Grades.vue";
import Behavior from "@/components/Behavior.vue";
import Allowance from "@/components/Allowance.vue";

export default {
  name: "Home",
  components: {
    Main,
    Today,
    Chores,
    Assignments,
    Grades,
    Behavior,
    Allowance
  }
};
</script>

<style lang="scss" scoped>
.section {
  margin: 1% 1%;
}
</style>
