<template>
    <div id="app">
        <TodoHeader/>
        <AddTodo @add-todo="addTodo" :todos="todos"/>
        <Todos :todos="todos" @del-todo="deleteTodo" @done="boxCheck" />
        <TodoFooter/>
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader'
    import Todos from './components/Todos'
    import AddTodo from './components/AddTodo'
    import TodoFooter from './components/TodoFooter'
    const Utils = require("./utils");


    export default {
        name: 'app',
        components: {
            Todos,
            TodoHeader,
            TodoFooter,
            AddTodo
        },
        data() {
            return {
                todos: []

            }
        },
        async created() {
            const response = await fetch('http://localhost:5553/todos', {
                method: Utils.METHODS.get,
                mode: 'cors',
            });
            let todos = await response.json();
            this.todos = todos.map((todo) => {
                const date = new Date(todo.created);
                return {
                    id: todo.id,
                    title: todo.task,
                    completed: todo.isDone,
                    day: date.getDay(),
                    month: date.toLocaleString('default', {month: 'short'}),
                    year: date.getFullYear(),
                }
            });
        },
        methods: {
            addTodo(newTodo) {
                this.todos.push(newTodo);
                fetch('http://localhost:5553/input', {
                    method: Utils.METHODS.patch,
                    body: JSON.stringify(newTodo),
                    headers: {"Content-Type": "application/json"},
                    mode: 'cors',
                });
            },
            boxCheck(id) {
                let checkedTodo = this.todos.find(todo => todo.id === id);
                if (checkedTodo) {
                    const {id} = checkedTodo;
                    fetch('http://localhost:5553/update', {
                        method: Utils.METHODS.patch,
                        body: JSON.stringify({id, isDone: 1}),
                        headers: {"Content-Type": "application/json"},
                        mode: 'cors',
                    })
                }
            },
            deleteTodo(id) {
                let deletedItem = this.todos.filter(todo => todo.id !== id)
                if(deletedItem) {
                    this.todos.completed = !this.todos.completed
                    fetch('http://localhost:5553/delete', {
                        method: Utils.METHODS.delete,
                        body: JSON.stringify({id}),
                        headers: {
                            "Access-Control-Allow-origin": "*",
                            "Content-Type": "application/json"
                        },
                        mode: "cors",
                    })
                }
            },
            async getCompletedTask(noOfCompletedTask) {
                // alert(noOfCompletedTask)
                const response = await fetch('http://localhost:5553/todos', {
                    method: Utils.METHODS.get,
                    mode: 'cors',
                });
                let task = await response.json();
                this.noOfCompletedTask = task.length
                return this.noOfCompletedTask;
            },
        }
    }
</script>

<style scoped>
    #app {
        margin: 100px auto 0 auto;
        width: 350px;
        height: auto;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 4px #e7e7e7;
    }
</style>