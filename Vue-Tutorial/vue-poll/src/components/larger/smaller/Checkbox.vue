<script setup>
import { ref } from 'vue';
defineProps({
    paragraphName: String,

})

const picked = ref("Male")

</script>

<template>
    <div>
        <p class="paragraph">{{ paragraphName }} </p>
        <p class="checkboxVariant"> <input type="radio" id="maleCheckbox" v-model="picked" value="Male" /> Male </p>
        <p class="checkboxVariant"> <input type="radio" id="femaleCheckbox" v-model="picked" value="Female" /> Female
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