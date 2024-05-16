<script setup>
defineProps({
    wordProp: String,
    translationProp: String,
})
</script>

<template>
    <div class="card">
        <h2>{{ wordProp }}</h2>
        <p>{{ translationProp }}</p>
        <p></p>
    </div>
</template>

<style scoped>
.card {
    background-color: #0141a1;
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