<template>
  <div id="main">
    <h1>{{ msg }}</h1>
    <p class="font-bold">This is a bold sentence.</p>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
#main {
  text-align: center;
}
</style>
