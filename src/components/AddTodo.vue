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
    </div>
    <div id="navs" v-if="toggle">
      <ul>
        <li><a href="">View All Todos</a></li>
        <li><a href="">Delete Completed Todo(s)</a></li>
        <li><a href="">View Uncompleted Todos</a></li>
        <li><a href="">View Completed Todos</a></li>
      </ul>
    </div>
    <div id="menu">
      <div id="circle" @click="addTodo">
        <i class="fas fa-plus-circle"></i>
      </div>
      <div id="nav-bar" @click="menu">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </div>
</template>

<script>
import uuid from "uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      toggle: false
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: uuid.v4(),
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
  margin: 5px 0 0 0;
}
#form {
  width: 98%;
  margin: 0 auto;
}
input {
  width: 100%;
  border: none;
  outline: none;
  padding: 3px 5px;
  box-shadow: 0 0 3px grey;
}
#menu {
  width: 100%;
  height: 40px;
  margin: 0px auto 0 auto;
  margin: -10px 0 0 0;
}
#circle {
  position: relative;
  top: 15px;
  left: 140px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0ccab1;
  color: #fff;
}
#circle:hover {
  transform: scale(1.1);
}
#nav-bar {
  border: 1px solid #0ccab1;
  padding: 0 0 0 6px;
  color: #0ccab1;
}
::placeholder {
  color: #0ccab1;
  font-size: 14px;
}
#navs {
  position: relative;
  
}
#navs ul {
  position: absolute;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
  bottom: -20px;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #0ccab1;
}
#navs ul li {
  list-style: none;
}
#navs ul li a {
  color: #0ccab1;
  font-size: 12px;
}
</style>
