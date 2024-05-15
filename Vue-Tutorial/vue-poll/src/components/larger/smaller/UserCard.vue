<script setup>
defineProps({
    userName: String,
    userLastName: String,
    userGender: String,
    userLiking: String,
})
</script>

<template>
    <div class="card">
        <h2 class="title">Name: {{ userName }} {{ userLastName }}</h2>
        <p>Gender: {{ userGender }}</p>
        <p>Likes: {{ userLiking }}</p>
    </div>
</template>

<style scoped>
.card {
    background-color: rgb(1, 107, 58);
    border-radius: 5px;
    border: none;
    font-size: 20px;
    padding: 10px;
    margin: 20px 0px 20px 0px;
    color: white;
    text-align: center;
    height: auto;
    width: 500px;
    display: inline-block;
}
</style>