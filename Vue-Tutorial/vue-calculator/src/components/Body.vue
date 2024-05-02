<script setup>
import Calc from './Calc.vue';
import CalculatorButton from './CalculatorButton.vue';
</script>

<template>
    <Calc />
    <div class="calc-keys">
        <CalculatorButton name="+" />
        <CalculatorButton name="1" />
        <CalculatorButton name="2" />
        <CalculatorButton name="3" />
        <CalculatorButton name="-" />
        <CalculatorButton name="4" />
        <CalculatorButton name="5" />
        <CalculatorButton name="6" />
        <CalculatorButton name="*" />
        <CalculatorButton name="7" />
        <CalculatorButton name="8" />
        <CalculatorButton name="9" />
        <CalculatorButton name="/" />
        <CalculatorButton name="C" />
        <CalculatorButton name="." />
        <CalculatorButton name="0" />
        <CalculatorButton name="=" />
    </div>

</template>

<style scoped>
.calc-keys {
    display: grid;
    grid-template-columns: repeat(4, 0fr);
    gap: 5px;
    padding: 5px;
    overflow: none;
}
</style>
