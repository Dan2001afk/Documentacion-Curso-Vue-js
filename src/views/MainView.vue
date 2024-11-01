<template>
  <Header :mensaje="texto"></Header>
  <div class="container">
    <Sidebar></Sidebar>
    <div class="content">
        <!-- [<router-view>] etiqueta encargada de cargar el contendio del componente que corresponde  -->
          <input type="text" v-model="texto">
          {{texto}}
        <router-view></router-view>

    </div>
  </div>
</template>
<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue'
import { ref } from 'vue';
const texto = ref('');


</script>

<style scoped>
.container{
    display: flex;
}
.content{
    flex: 1;
    padding: 20px;
    /* background-color: yellowgreen; */
}
</style>
