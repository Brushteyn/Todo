<template>
  <div class="todo">
    <todoHeader />
    <div class="body" v-if="lists.length">
      <div class="todo-item" v-for="(list, index) in lists" :key="list.id">
        <input type="checkbox" v-model="list.isComplete" />
        <span v-bind:class="{ checked: list.isComplete }">{{
          list.title
        }}</span>
        <button @click="deleteTodo(index)">X</button>
      </div>
    </div>
    <div class="footer">
      <div class="error" v-if="hasError">Вы ничего не ввели!</div>
    </div>
  </div>
</template>

<script>
import todoHeader from "@/components/todoHeader.vue";

export default {
  components: {
    todoHeader,
  },
  data: function () {
    return {
      addTodoInput: "",
      lists: [],
      hasError: false,
    };
  },
  methods: {
    addTodo() {
      if (!this.addTodoInput) {
        this.hasError = true;
        return;
      }

      this.hasError = false;

      this.lists.push({
        id: this.lists.length + 1,
        title: this.addTodoInput,
        isComplete: false,
      });

      this.addTodoInput = "";
    },
    deleteTodo: function (index) {
      this.lists.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  width: 300px;
  min-height: 300px;
  background: grey;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>
