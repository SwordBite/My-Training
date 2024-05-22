<script setup>
import AddWords from './AddWords.vue';
import WordCard from './WordCard.vue';
import WordSearch from './WordSearch.vue';
import { reactive } from 'vue';

const dictionary = reactive({})

const addNewWords = (newWord, newTranslation) => {
    dictionary[newWord] = newTranslation;
}
</script>

<template>
    <div class="left-block">
        <AddWords @passWords="addNewWords" />
    </div>

    <div class="righ-block">
        <WordSearch />
    </div>
    <div class="left-block-bottom">
        <WordCard v-for="(value, key) in dictionary" :wordProp="key" :translationProp="value" />
    </div>
</template>


<style scoped>
.left-block {
    float: left;
    display: block;
    width: 300px;
    border: none;
}

.right-block {
    float: right;
    display: block;
    width: 300px;
    border: none;
}

.left-block-bottom {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    display: block;
    width: 300px;
    border: none;
}
</style>