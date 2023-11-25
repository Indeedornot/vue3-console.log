<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
import isEven from 'is-even';
defineProps<{
  msg: string
}>()

const counter = useCounterStore();
const increment = () => {
  console.log('increment from component asd')
  counter.increment();
}
</script>

<template>
  <div class="greetings">
    <h1 class="green" @click="increment">{{ msg }}</h1>
    <h2>{{  isEven(counter.count) }}</h2>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
