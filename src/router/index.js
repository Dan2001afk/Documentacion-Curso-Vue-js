import Contador from '@/Modules/Contador/components/Contador.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      // {
      //   path: '/',
      //   name: 'home',
      //   component: Contador
      // }

      //Redireccionamiento de componentes
      {
        path: '/Contador',
        name: 'Contador',
        component: () => import('../Modules/Contador/components/Contador.vue')
      },
      {
        path: '/Lista-Tareas',
        name: 'Lista-Tareas',
        component: () => import('../Modules/ListaTareas/components/ListaTareas.vue')
      },
      {
        path: '/Registrar',
        name: 'Registrar',
        component: () => import('../Modules/Registro/Views/RegistrarView.vue')
      },
      {
        path: '/Calcular',
        name: 'Calcular',
        component: () => import('../Modules/Calcular/views/CalcularView.vue')
      }
  ]
})

export default router
