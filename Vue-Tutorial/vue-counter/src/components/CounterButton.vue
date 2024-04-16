<script setup>
defineEmits(['decrement', 'reset', 'increment'])
</script>
<template>
    <!-- Генерация событий дочерним компонентом с помощью метода $emit -->
    <button type="button" @click="$emit('decrement')" class="button">Decrease</button>
    <button type="button" @click="$emit('reset')" class="button">Reset</button>
    <button type="button" @click="$emit('increment')" class="button">Increase</button>
</template>