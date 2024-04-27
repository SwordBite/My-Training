<script setup>
import { ref } from 'vue'
defineEmits(['addItem'])

defineProps({
    isDisabled: Boolean,
})

const newTodo = ref('')
function refreshInput() {
    newTodo.value = ''
}
</script>

<template>
    <form @submit.prevent="refreshInput">
        <input :disabled="isDisabled" class="inputField" v-model="newTodo" required
            placeholder="What would you like to do?"></input>
        <button :disabled="isDisabled" class="addButton" @click="$emit('addItem', newTodo)">Add</button>
    </form>

</template>

<style scoped>
.addButton {
    margin: 10px;
    padding: 10px 20px;
    background-color: #14145f;
    border-radius: 5px;
    border-style: hidden;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #44448d;
    }

}

.inputField {
    width: 40%;
    padding: 10px 20px;
    margin: 8px 0;
    display: inline-block;
    border-style: hidden;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #3a3a6b;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
}

::placeholder {
    color: rgba(255, 255, 255, 0.61);
}
</style>