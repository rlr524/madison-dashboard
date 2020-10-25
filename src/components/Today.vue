<template>
  <div class="dash-box">
    <div class="today flex">
      <h1 class="today-title">Today</h1>
      <i
        @click="addTodayItem"
        role="button"
        tabindex="0"
        aria-label="Click to add a new today item"
        class="today-icon material-icons"
        >add_circle</i
      >
    </div>
    <div>
      <ul>
        <li v-for="(item, index, uid) in items" :key="uid">
          {{ mainMessage }} {{ index + 1 }} - {{ item.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Today",
  data: function() {
    return {
      mainMessage: "Today item # ",
      items: [
        { uid: 10001, description: "Go to school" },
        { uid: 10002, description: "Do homework" },
        { uid: 10003, description: "Do chores" }
      ]
    };
  },
  methods: {
    addTodayItem: function() {
      this.items.push({ uid: 10004, description: "This is a new item" });
    }
  }
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
  cursor: pointer;
  flex: 0 1 auto;
  font-size: 2.5rem;
  margin-left: auto;
}

ul {
  margin-top: 3%;
}
</style>
