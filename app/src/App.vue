<template>
  <div id="app">
    <todo />
  </div>
</template>

<script>
import todo from "@/components/todo.vue";

export default {
  name: "app",
  components: {
    todo,
  },
};
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
