<template>
    <div className='mainBox'>
        여기가 index 페이지입니다
    <button @click ='onClick'>증가</button>
    <button @click ='reset'>초기화</button>
    </div>
    <div className='mainBox'>
      <p>{{ store.count }} 번 눌렀다!</p>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '../hook/countPinia'

const store = useStore()

const onClick=()=>{
  store.count++;
  console.log(store.count);
}
const reset=()=>{
  store.count = 0;
}
</script>

<style >
.mainBox{
  width: 100%;
  height: 100%;
  border: 1px solid salmon;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>