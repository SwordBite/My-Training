<script setup>
import { ref } from 'vue';
defineEmits([
    'passPick'
])
defineProps({
    paragraphName: String,

})

const picked = ref('Female')

</script>

<template>
    <div>
        <p class="paragraph">{{ paragraphName }} </p>
        <p class="checkboxVariant"> <input type="radio" id="maleCheckbox" v-model="picked" value="Female"
                @click="$emit('passPick', picked)" /> Male </p>
        <p class="checkboxVariant"> <input type="radio" id="femaleCheckbox" v-model="picked" value="Male"
                @click="$emit('passPick', picked)" /> Female
        </p>
    </div>
</template>

<style scoped>
.paragraph {
    color: white;
    font-size: 20px;
}

.checkboxVariant {
    color: white;
    font-size: 20px;
    padding: 5px 15px;
    margin: 10px 0px 10px 0px;
    background-color: rgb(1, 107, 58);
    border-radius: 5px;
    border: none;
    width: 150px;
}

input {
    accent-color: rgb(2, 34, 20);
}
</style>