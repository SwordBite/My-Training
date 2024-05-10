<script setup>
defineProps({
    variantName: String,
})
</script>


<template>
    <p> <input type="radio"> {{ variantName }}</p>
</template>

<style scoped>
input {
    accent-color: rgb(2, 34, 20);
}
</style>