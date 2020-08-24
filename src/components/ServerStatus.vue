<template>
  <div>
    <h2>
      Server Status:
      <span>{{ status }}</span>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 my-2 rounded"
        @click="changeStatus"
      >
        Change Status
      </button>
    </h2>
  </div>
</template>

<script>
export default {
  name: "ServerStatus",
  data() {
    return {
      status: "Normal"
    };
  },
  methods: {
    changeStatus: function() {
      this.status = "Critical";
    }
  }
};
</script>

<style lang="scss" scoped></style>
