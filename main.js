var app = new Vue({
    el: '#app',
    data: {
        addTodoInput: '',
        lists: [],
        hasError: false
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
                isComplete: false
            });

            this.addTodoInput = '';
        }
    }
})