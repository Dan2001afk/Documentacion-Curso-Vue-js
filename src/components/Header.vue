<template>
  <div class="header">
    {{ mensajeRecibido }}<Weather></Weather>
  </div>

  </template>
<script setup>
import Weather from './Weather.vue';
import { defineProps,ref,watch } from 'vue';
const props = defineProps(['mensaje'])
const mensajeRecibido = ref(props.mensaje);
watch(()=>props.mensaje,(newValue)=>{
  mensajeRecibido.value = newValue
})
</script>

  <style scoped>
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 500px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0);
    color: white;
    text-align: center;
    font-size: 15px;
    margin-bottom: 50px;
  }

  h3{
    margin: 0;
    text-align: center;
  }
  </style>

