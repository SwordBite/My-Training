<script setup>
import FillForm from './smaller/FillForm.vue'
import Checkbox from './smaller/Checkbox.vue'
import Combobox from './smaller/Combobox.vue'
import PollButton from './smaller/PollButton.vue'
import UserCard from './smaller/UserCard.vue'
import { ref } from 'vue'


const userName = ref('');

const userLastName = ref('');

const userGender = ref('Male')

const userLiking = ref('')

const displayCard = ref(false)

const setUserName = (newName) => {
    userName.value = newName;

}
const setUserLastName = (newLastName) => {
    userLastName.value = newLastName;
}

const setGender = (newGender) => {
    userGender.value = newGender;
}
const setLiking = (newLiking) => {
    userLiking.value = newLiking;
}

const submitAnswers = () => {
    displayCard.value = !displayCard.value

}

const checkInput = () => {
    if (userName.value === "")
        return
}
</script>

<template>
    <div>
        <FillForm labelName="What is your First Name?" @passInput="setUserName($event)" />
        <FillForm labelName="What is your Last Name?" @passInput="setUserLastName($event)" />
        <Checkbox paragraphName="There are only two genders:" @passPick="setGender($event)" />
        <Combobox comboLabel="What do you like more?" @passSelect="setLiking($event)" />
        <PollButton buttonName="Submit" @sendAnswers="submitAnswers()" :isDisabled="checkInput()" />
        <UserCard :userName="userName" :userLastName="userLastName" v-if="displayCard" :userGender="userGender"
            :userLiking="userLiking" />
    </div>
</template>

<style scoped></style>