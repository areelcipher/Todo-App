<template>
    <div id="todos">
        <div v-for="todo in todos" :key="todo.id">
            <TodoItems :todo="todo" @del-todo="$emit('del-todo', todo.id)"/>
        </div>
    </div>
</template>

<script>
    import TodoItems from './TodoItems'
    export default {
        name: "Todos",
        props: ['todos'],
        components: {
            TodoItems
        }

    }
</script>

<style scoped>
    #todos {
        /*border: 1px solid red;*/
        max-height: 150px;
        overflow: auto;
        width: 100%;
    }
</style>