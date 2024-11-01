<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre de Usuario: {{ registrarStore.Nombre }}</h3>
        <h3>Email de Usuario: {{ registrarStore.email }}</h3>
        <ul>
            <!-- la eiqueta [router-link] permite crear enlaces y gestionar las rutas -->
            <li><router-link to="/Contador">Contador</router-link></li>
            <li><router-link to="/Lista-Tareas">Lista Tareas</router-link></li>
            <li><router-link to="/Registrar">Registrar Usuario</router-link></li>
            <li><router-link to="/Calcular">Calcular</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import { useRegistrarStore } from '@/Modules/Registro/stores/registrarStore';
const registrarStore = useRegistrarStore();
</script>

<style scoped>
.sidebar{
    width: 400px;
    background-color: cornsilk;
    padding: 20px;
}
</style>
