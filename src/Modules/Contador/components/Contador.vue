<!-------------------------------------------CODIGO---HTML-------------------------------------------------------->
<template>
   <h1>Hola Mundo</h1>
<!-- para llamar funciones no es necesario poner parentesis -->
  <button @click="Decrementar">
    -
  </button>
<P>{{ contador }}</P>
<button @click="Incrementar">
  +
</button>
</template>
<!-------------------------------------------CODIGO---HTML-------------------------------------------------------->

<!-----------------------------------------CODIGO--JAVASCRIPT--------------------------------------------------------------------------------->
<script setup>
import {ref} from 'vue';
const contador = ref(0);

const Incrementar = () =>{
  contador.value++;
}

const Decrementar = () =>{
  contador.value--;
}
</script>
<!-----------------------------------------CODIGO--JAVASCRIPT--------------------------------------------------------------------------------->


<!-------------------------------------------CODIGO--CSS------------------------------------------------------>
<style scoped>
p{
  color: rgb(72, 255, 0);
}
</style>
<!-------------------------------------------CODIGO--CSS------------------------------------------------------>

