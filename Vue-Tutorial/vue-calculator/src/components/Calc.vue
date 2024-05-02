<script setup>
import {ref} from 'vue';

const calc = ref(0);
</script>

<template>
    <div>
        <input class="calc-input" readonly>{{ calc }}</input>
    </div>
</template>

<style scoped>
.calc-input {
    width: 340px;
    height: 50px;
    border: none;
    border-radius: 15px;
    background-color: hsl(0, 5%, 22%);
    font-size: 20px;
    color: white;
}
</style>