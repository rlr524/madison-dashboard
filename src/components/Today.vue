<template>
  <div class="dash-box">
    <div class="today flex">
      <h1 class="today-title">Today</h1>
      <i class="today-icon material-icons">add_circle</i>
    </div>
    <div>
      <ol>
        <li>Today item # 1</li>
        <li>Today item # 2</li>
        <li>Today item # 3</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "Today"
};
</script>

<style lang="scss" scoped>
.today-title {
  flex: 0 1 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.today-icon {
  flex: 0 1 auto;
  font-size: 2.5rem;
  margin-left: auto;
}

ol {
  margin-top: 3%;
}
</style>
