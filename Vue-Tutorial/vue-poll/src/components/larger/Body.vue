<script setup>
import FillForm from './smaller/FillForm.vue'
import Checkbox from './smaller/Checkbox.vue'
import Combobox from './smaller/Combobox.vue'
import PollButton from './smaller/PollButton.vue'
</script>

<template>
    <div>
        <FillForm labelName="What is your First Name?" />
        <FillForm labelName="What is your Last Name?" />
        <Checkbox paragraphName="There are only two genders:" />
        <Combobox comboLabel="What do you like more?" />
        <PollButton buttonName="Submit" />
    </div>
</template>

<style scoped></style>