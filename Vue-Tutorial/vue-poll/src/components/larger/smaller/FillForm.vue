<script setup>
import { ref, watch } from 'vue'
defineEmits(['passInput'])
defineProps({
    labelName: String,
})

const userInput = ref();

// const stop = watch(userInput, () => {
//     changeUserInput()
//     stop()
// })

// const changeUserInput = () => {
//     userInput.value = userInput.value + 'a';
// }
</script>

<template>
    <div>
        <label class="inputLabel">{{ labelName }}</label> <br>
        <input v-model="userInput" value="" class="inputBox" @input="$emit('passInput', userInput)" required
            placeholder="Type in here...">
        </input>
    </div>
</template>

<style scoped>
.inputLabel {
    font-size: 20px;
    color: white;

}

.inputBox {
    background-color: rgb(1, 107, 58);
    border-radius: 5px;
    border: none;
    font-size: 20px;
    padding: 10px;
    margin: 20px 0px 20px 0px;
    color: white;
}

::placeholder {
    color: white;
}
</style>