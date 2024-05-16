<script setup>;
defineProps({
    listItems: Array,
})


</script>

<template>
    <ul class="uList">
        <li v-for="item in listItems" :key="item.id">
            {{ item.value }}
            <button class="deleteButton" @click="$emit('removeItem', item)">x</button>
        </li>
    </ul>
</template>

<style scoped>
.uList {
    list-style-type: square;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.deleteButton {
    margin: 5px;
    padding: 1px 5px;
    background-color: #14145f;
    border-radius: 5px;
    border-style: hidden;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: white;
    cursor: pointer;
}
</style>