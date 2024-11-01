<template>
    <div>
        <h2>Formulario de Registro</h2>
    <Form :validation-schema="schemas" @submit="onSubmit">
       <div class="form">
            <label>
                Nombre
            </label>
            <Field v-model="Nombre" type="text" id="Nombre" name="Nombre" placeholder="Ingrese su Nombre"/>
            <ErrorMessage name="Nombre"></ErrorMessage>
        </div>

        <div class="form">
            <label>
            Correo
            </label>
            <Field v-model="email" type="email" id="Correo" name="email" placeholder="Ingrese su email"/>
            <ErrorMessage name="email"></ErrorMessage>
        </div class="form">
        <div>
            <button type="submit"> Registrar</button>
        </div>
    </Form>
    </div>
</template>
<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import { schemas } from '../schemas/ValidateSchemas';
import { useRegistrarStore } from '../stores/registrarStore';
import { ref } from 'vue';

const RegistrarStore = useRegistrarStore();
const Nombre = ref('');
const email = ref('');

const onSubmit = () =>{
    RegistrarStore.guardarRegistro(Nombre.value, email.value)
    console.log("se ha enviado el formulario correctamente")
}

</script>
<style scoped>
.form{
    margin-bottom: 10px;
}
</style>
