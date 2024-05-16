<script setup>
import AddWords from './AddWords.vue';
import WordCard from './WordCard.vue';
import { ref } from 'vue';

const word = ref('')
const translation = ref('')

const addNewWords = (newWord, newTranslation) => {
    word.value = newWord;
    translation.value = newTranslation;
}
</script>

<template>
    <AddWords @passWords="addNewWords" />
    <WordCard :translationProp="translation" :wordProp="word" />
</template>


<style scoped></style>