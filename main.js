var app = new Vue({
    el: '#app',
    data: {
        addTodoInput: '',
        lists: []
    },
    methods: {
        addTodo() {
            this.lists.push({
                id: this.lists.length + 1,
                title: this.addTodoInput,
                isComplete: false
            });

            this.addTodoInput = '';
        }
    }
})