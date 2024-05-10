<script setup>
defineProps({
    labelName: String,
})
</script>

<template>
    <div>
        <label class="inputLabel">{{ labelName }}</label> <br> <input class="inputBox" required
            placeholder="Type in here..."></input>
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