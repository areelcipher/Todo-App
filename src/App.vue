<template>
    <div id="app">
        <TodoHeader />
        <Todos :todos="todos" @del-todo="deleteTodo"/>
        <AddTodo @add-todo="addTodo"/>
        <TodoFooter />
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader'
    import Todos from './components/Todos'
    import AddTodo from './components/AddTodo'
    import TodoFooter from './components/TodoFooter'
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
        methods: {
            deleteTodo(id) {
                this.todos = this.todos.filter(todo => todo.id != id);
            },
            addTodo(newTodo) {
                this.todos.push(newTodo);
            }
        }
    }
</script>

<style scoped>
    #app {
        margin: 100px auto 0 auto;
        width: 320px;
        height: auto;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 4px #e7e7e7;
    }
</style>