<template>
  <div class="header">
    <input type="text" v-model="addTodoInput" />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
    margin-right: 10px;
  }
}
</style>
