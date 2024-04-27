<script setup>
defineEmits(['increment', 'reset', 'decrement'])
defineProps({
    name: String,
    actionType: String,
})
</script>
<template>
    <!-- Генерация событий дочерним компонентом с помощью метода $emit -->
    <button type="button" class="button" @click="$emit(actionType)"> {{ name }}</button>
</template>