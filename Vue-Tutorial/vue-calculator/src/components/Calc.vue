<script setup>
import {ref} from 'vue';

const calc = ref(0);
</script>

<template>
    <div>
        <form class="calc-input" readonly>{{ calc }}</form>
    </div>
</template>

<style scoped>
.calc-input {
    width: 320px;
    height: 50px;
    border: none;
    border-radius: 15px;
    background-color: hsl(0, 5%, 22%);
    font-size: 25px;
    font-family: Helvetica;
    color: white;
    margin: 10px;
    padding: 5px 10px 0px 10px;
}
</style>