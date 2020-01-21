<template>
    <div id="todo-items" :class="{'is-complete': todo.completed}">
        <div id="item">
            <input type="checkbox" @change="markComplete">
            <div id="task-detail">
                <p id="task">{{todo.title}}</p>
                <p id="date">{{todo.month}} {{todo.day}}, {{todo.year}}</p>
            </div>
            <span @click="$emit('del-todo', todo.id)" id="trash">
                <i class="fas fa-trash"></i>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoItems",
        props: ['todo'],
        methods: {
            markComplete() {
                // alert(123)
                this.todo.completed = !this.todo.completed
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Orbitron|Roboto|Ubuntu&display=swap');
    #todo-items {
        box-shadow: 0px 0px 4px #dbdbdb;
        height: auto;
        width: 300px;
        display: flex;
        align-items: center;
        padding: 3px 10px;
        margin: 5px auto 6px auto;
        font-family: 'Montserrat', sans-serif;
        /*border: 1px solid red;*/
    }
    #item {
        margin: 0;
        display: flex;
        align-items: center;
        width: 100%;
        color: #0ccab1;
    }
    .is-complete {
        border: 2px solid #0ccab1;
        border-radius: 5px;
        font-style: italic;
        font-weight: 100;
    }

    input {
        margin-right: 10px;
    }
    #task-detail {
        display: flex;
        flex-direction: column;
    }
    #trash {
        margin: 0 0 0 auto;
    }
    #trash:hover {
        transform: scale(1.2)
    }
    #task {
        margin: 0;
        font-size: 14px;
    }
    #date {
        margin: 0;
        font-size: 10px;
    }
</style>