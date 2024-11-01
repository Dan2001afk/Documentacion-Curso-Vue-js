import { defineStore } from "pinia";
import { ref } from "vue";
export const useWeatherStore = defineStore('weather', ()=>{
    const Temperatura = ref(0);
    const setTemperatura = (temp) =>{
      Temperatur.value = temp;
    }
    return{
      Temperatura, setTemperatura
    };
})
