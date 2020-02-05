<template>
    <div id="add-todo">
        <div id="form">
            <input
                    type="text"
                    name="title"
                    placeholder="Add todo..."
                    v-model="title"
                    v-on:keyup.enter="addTodo"
            />
            <span @click="addTodo"> <i class="fas fa-plus-circle"></i> </span>
        </div>

    </div>
</template>

<script>
    // import uuid from "uuid";

    export default {
        name: "AddTodo",
        props: ['todos'],
        data() {
            return {
                title: "",
                toggle: false
            };
        },
        methods: {
            addTodo() {
                const newTodo = {
                    id: this.todos.id,
                    title: this.title,
                    completed: false,
                    month: new Date()
                        .toDateString()
                        .split(" ")
                        .slice(1)[0],
                    day: new Date()
                        .toDateString()
                        .split(" ")
                        .slice(1)[1],
                    year: new Date()
                        .toDateString()
                        .split(" ")
                        .slice(1)[2]
                };
                //Send up to parent
                if (this.title.trim() === "") return;
                this.$emit("add-todo", newTodo);
                this.title = "";
            },
            menu() {
                this.toggle = !this.toggle;
            }
        }
    };
</script>

<style scoped>
    #add-todo {
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
        margin: 0;
    }

    #form {
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    input {
        width: 100%;
        margin: 0 auto;
        border: none;
        outline: none;
        font-size: 18px;
    }

    #menu {
        width: 100%;
        height: 40px;
        margin: 0px auto 0 auto;
        margin: -10px 0 0 0;
    }
    .fa-plus-circle {
        color: #0ccab1;
        font-size: 22px;
    }

    ::placeholder {
        color: #0ccab1;
        font-size: .95rem;
    }
</style>
