<template>
  <p>Child...</p>
</template>

<script>
export default {
  name: "Child",
  inject: ["name"],
  mounted() {
    console.log(this.name);
  },
};
</script>

<style></style>
