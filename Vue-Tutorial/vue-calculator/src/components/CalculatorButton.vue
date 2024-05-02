<script setup>
defineProps({
    name: String,
})
</script>


<template>
    <div>
        <button class="operator-btn">{{ name }}</button>
    </div>
</template>


<style scoped>
.operator-btn {
    margin: 5px;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    border: none;
    background-color: hsl(0, 5%, 22%);
    color: white;
    font-size: 20px;
    cursor: pointer;
}
</style>