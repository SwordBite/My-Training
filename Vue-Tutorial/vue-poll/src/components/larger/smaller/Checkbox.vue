<script setup>
import CheckboxVariant from './lesser/CheckboxVariant.vue'
defineProps({
    paragraphName: String,

})
</script>

<template>
    <div>
        <p class="paragraph">{{ paragraphName }}</p>
        <CheckboxVariant class="checkbox" variantName="Male" />
        <CheckboxVariant class="checkbox" variantName="Female" />
    </div>
</template>

<style scoped>
.paragraph {
    color: white;
    font-size: 20px;
}

.checkbox {
    color: white;
    font-size: 20px;
    padding: 5px 15px;
    margin: 10px 0px 10px 0px;
    background-color: rgb(1, 107, 58);
    border-radius: 5px;
    border: none;
    max-width: 10%;
}
</style>