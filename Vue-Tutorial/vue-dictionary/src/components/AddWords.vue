<script setup>
import { ref } from 'vue';
defineEmits([
    'passWords'
])
const wordInput = ref('')
const translationInput = ref('')
</script>

<template>
    <div class="word-box">
        <label class="word-label">English: </label>
        <input v-model="wordInput" value="" class="word-input" required placeholder="Word"></input> <br>
        <label class="word-label">Russian: </label>
        <input v-model="translationInput" value="" class="word-input" required placeholder="Translation"></input><br>
        <button @click="$emit('passWords', wordInput, translationInput)" class="add-button">Add Word</button>
    </div>


</template>


<style scoped>
.word-box {
    margin: 15px 0px;
    font-size: 20px;
    color: white;
}

.word-input {
    background-color: #1f354b;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    color: white;
    margin: 10px 0px;
    padding: 10px;
    max-width: 200px;
}

.add-button {
    background-color: #0141a1;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    padding: 10px 10px;
    margin: 10px 0px;
}

.add-button:hover {
    background-color: #255aaa;
}

.add-button:active {
    background-color: #0066ff;
}
</style>