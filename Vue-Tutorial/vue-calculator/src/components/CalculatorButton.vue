<script setup>
defineProps({
    name: String,
})
</script>


<template>
    <div>
        <button class="calculator-btn">{{ name }}</button>
    </div>
</template>


<style scoped>

.calculator-btn {
    margin: 5px;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    border: none;
    background-color: hsl(0, 5%, 20%);
    color: white;
    font-size: 25px;
    font-family: Helvetica;
    cursor: pointer;

   
}
.calculator-btn:hover {
    background-color: hsl(0, 5%, 40%);
}
.calculator-btn:active {
    background-color: hsl(0, 5%, 60%);
}

</style>