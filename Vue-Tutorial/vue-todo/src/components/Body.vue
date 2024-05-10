<script setup>
import { ref } from 'vue'
import ListItem from './ListItems.vue'
import AddTodo from './AddTodo.vue'

let id = 0;
const listItems = ref([])

function addItem(value) {
    const splitItems = value.split(',')
    if (splitItems == []) {
        return
    }

    for (let index = 0; index < splitItems.length; index++) {
        const element = splitItems[index];
        listItems.value.push({ id: id++, value: element })
    }
}

function removeItem(value) {
    listItems.value = listItems.value.filter((todo) => value !== todo)
}
</script>

<template>
    <AddTodo @addItem="addItem" :isDisabled="listItems.length >= 10" />
    <ListItem :listItems="listItems" @removeItem="removeItem" />
</template>