<script setup lang="ts">
import {HelloWorld, TheWelcome } from '@library/components'
import { useCounterStore } from '@library/stores/counter';
import { useStringStore } from './store/stringStore';

const counter = useCounterStore();
const increment = () => counter.increment();

const string = useStringStore();
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="string.string" />
      <button @click="increment">Increment {{ counter.count }}</button>
      <input type="text" v-model="string.string" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>
