<script setup>
import { ref } from 'vue'
import ListItem from './ListItems.vue'
import AddTodo from './AddTodo.vue'

let id = 0;
const listItems = ref([])

function addItem(value) {

    if (value === '') {
        return
    }
    listItems.value.push({ id: id++, value: value })
}

function removeItem(value) {
    listItems.value = listItems.value.filter((todo) => value !== todo)
}
</script>

<template>
    <AddTodo @addItem="addItem" :isDisabled="listItems.length >= 10" />
    <ListItem :listItems=" listItems" @removeItem="removeItem" />
</template>