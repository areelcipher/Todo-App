<template>
    <footer>
        <p>Nesa By Makers | Copyright &copy; 2019</p>
        <i class="fab fa-github"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
    </footer>
</template>

<script>
    export default {
        name: "TodoFooter"
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Orbitron|Roboto|Ubuntu&display=swap');
    footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;
        background-color: #0ccab1;
        color: #fff;
        font-family: 'Ubuntu', sans-serif;
        margin: 20px 0 0 0;
        border-radius: 0 0 10px 10px;
    }
    p {
        margin: 0 auto 0 0;
        font-size: 12px;
    }
    .fa-github {
        margin: 0 10px 0 0;
    }
    .fa-instagram {
        margin: 0 10px 0 0;
    }
</style>