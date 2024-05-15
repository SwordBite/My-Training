<script setup>
import { ref } from 'vue';
defineProps({
    comboLabel: String,
})

const selected = ref('')
</script>

<template>
    <div>
        <label class="comboLabel">{{ comboLabel }}</label> <br>
        <select class="selector" v-model="selected" @click="$emit('passSelect', selected)">
            <option class="selectorOption" disabled value="">Select one</option>
            <option class="selectorOption">Cats</option>
            <option class="selectorOption">Dogs</option>
            <option class="selectorOption">Parrots</option>
            <option class="selectorOption">Mice</option>
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

.selectorOption {
    background-color: rgb(1, 107, 58);
    color: white;
}
</style>