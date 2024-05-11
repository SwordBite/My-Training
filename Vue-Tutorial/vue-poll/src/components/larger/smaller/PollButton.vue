<script setup>
defineProps({
    buttonName: String,
})

</script>


<template>
    <div>
        <button @click="" class="pollButton">{{ buttonName }}</button>
    </div>
</template>

<style scoped>
.pollButton {
    background-color: rgb(1, 107, 58);
    border-radius: 5px;
    border: none;
    font-size: 20px;
    padding: 10px;
    margin: auto;
    color: white;
    cursor: pointer;
}

.pollButton:hover {
    background-color: rgb(1, 145, 77);
}

.pollButton:active {
    background-color: rgb(61, 224, 148);
}
</style>