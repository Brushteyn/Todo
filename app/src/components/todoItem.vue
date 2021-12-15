<template>
  <div class="todo-item" v-for="(list, index) in lists" :key="list.id">
    <input type="checkbox" v-model="list.isComplete" />
    <span v-bind:class="{ checked: list.isComplete }">{{ list.title }}</span>
    <button @click="deleteTodo(index)">X</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.todo-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    width: 80%;

    &.checked {
      text-decoration: line-through;
      color: green;
    }
  }
}
</style>
