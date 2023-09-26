<template>
  <div id='app'>
    <Header></Header>
      <div id='body'>
        <NuxtPage />
      </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from './Compontes/Header.vue';
import Footer from './Compontes/Footer.vue';
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
#body{
  width: 100%;
  height: 100%;
  display: flex;
}
html,body{
  margin: 0;
}
</style>
