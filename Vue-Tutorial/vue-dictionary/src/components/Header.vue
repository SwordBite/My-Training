<script setup>

</script>

<template>
    <div class="topnav">
        <a class="active">New Word</a>
    </div>
</template>


<style scoped>
.topnav {
    background-color: #1f354b;
    overflow: hidden;
    border: none;
    border-radius: 10px;
    margin: auto;

}

.topnav a {
    float: left;
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 18px 16px;
    text-decoration: none;
    font-size: 15px;
    border-radius: 10px;
}

.topnav a:hover {
    background-color: #255aaa;
    color: white;
    cursor: pointer;
    border: none;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
}

.topnav a.active {
    background-color: #0141a1;
    color: white;
}
</style>
