<template>
    <header>
        <h4>To-do App</h4>
    </header>
</template>

<script>
    export default {
        name: "TodoHeader"
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Orbitron|Roboto|Ubuntu&display=swap');
    header {
        height: 50px;
        width: 99%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px auto 20px auto;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }
    h4 {
        color: #0ccab1;
        font-size: 20px;
    }
</style>