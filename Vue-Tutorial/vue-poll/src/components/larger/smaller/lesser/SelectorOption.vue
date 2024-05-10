<script setup>
defineProps({
    optionName: String,
})
</script>

<template>
    <option class="selectorOption">{{ optionName }}</option>
</template>

<style scoped>
.selectorOption {
    background-color: rgb(1, 107, 58);
    color: white;
}
</style>