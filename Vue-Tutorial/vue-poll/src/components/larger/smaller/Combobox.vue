<script setup>
import SelectorOption from './lesser/SelectorOption.vue'
defineProps({
    comboLabel: String,
})
</script>

<template>
    <div>
        <label class="comboLabel">{{ comboLabel }}</label> <br>
        <select class="selector">
            <SelectorOption optionName="Cats" />
            <SelectorOption optionName="Dogs" />
            <SelectorOption optionName="Parrots" />
            <SelectorOption optionName="Rats" />
        </select>
    </div>
</template>

<style scoped>
.comboLabel {
    color: white;
    font-size: 20px;
}

.selector {
    background-color: rgb(1, 107, 58);
    border-radius: 5px;
    border: none;
    font-size: 20px;
    padding: 10px 15px 10px 15px;
    margin: 20px 0px 20px 0px;
    color: white;
}
</style>