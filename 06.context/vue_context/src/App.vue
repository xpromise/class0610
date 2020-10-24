<template>
  <p>App...</p>
  <Father />
</template>

<script>
import Father from "./Father";
export default {
  name: 'App',
  provide: {
    name: 'huahua'
  },
  components: {
    Father,
  },
};
</script>

<style></style>
