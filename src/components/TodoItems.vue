<template>
    <div id="todo-items"  v-if="isDeleted">
        <div id="item">
            <input type="checkbox" @change="completedTask" >
            <div id="task-detail">
                <p id="task" :class="{isComplete: isComplete}" >{{todo.title}}</p>
                <p id="date">{{todo.month}} {{todo.day}}, {{todo.year}}</p>
                <p v-if="todo.completed" id="doneTask">Done</p>
            </div>
            <span @click="del" id="trash">
                <i class="fas fa-trash"></i>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoItems",
        props: ['todo'],
        data() {
            return {
                isComplete: this.todo.completed,
                isDeleted: true
            }
        },
        methods: {
            del() {
                this.isDeleted = false
                this.$emit('del-todo', this.todo.id)
            },
            completedTask() {
                this.isComplete = !this.isComplete
                this.$emit('done', this.todo.id)
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
    .isComplete {
        text-decoration: line-through;
        font-style: italic;
        color: grey;
    }

    input {
        margin-right: 10px;
    }
    #task-detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    #doneTask {
        font-size: 10px;
        margin-bottom: 0;
    }
</style>