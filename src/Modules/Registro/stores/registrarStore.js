import { defineStore } from "pinia"
import { ref } from "vue";

export const useRegistrarStore = defineStore('registrar',() =>{
  const Nombre = ref('');
  const email = ref('');

const guardarRegistro = (nombreFormulario, emailFormulario) =>{
    Nombre.value = nombreFormulario;
    email.value = emailFormulario;

  }
  return {
    Nombre, email, guardarRegistro
  }
});
