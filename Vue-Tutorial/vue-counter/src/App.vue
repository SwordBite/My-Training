<script setup>
import CounterButton from './components/CounterButton.vue';
import { ref } from 'vue'

const counter = ref(0);

</script>

<template>
  <h1 class="headline">Simple Vue Counter</h1>
  <h2 class="counter">{{ counter }}</h2><br>
  <div>
    <!-- Сообщение родительскому компоненту что ему делать -->
    <CounterButton @decrement="counter--" @increment="counter++" @reset="counter = 0" />
  </div>
</template>

<!-- <script setup>
import { ref } from 'vue'

const counter = ref(0);

const increment = () => counter.value++;
const decrement = () => counter.value--;
const reset = () => counter.value = 0;

</script>

<template>
  <h1 class="headline">Simple Vue Counter</h1>
  <h2 class="counter">{{ counter }}</h2><br>
  <div>
    <button type="button" @click="decrement" class="button">Decrease</button>
    <button type="button" @click="reset" class="button">Reset</button>
    <button type="button" @click="increment" class="button">Increase</button>
  </div>
</template> -->
<!-- Сделать единый компонент кнопки -->
<!-- посмотреть как общаются компоненты во Vue -->