import {useWeatherStore} from '../stores/weatherStore';
import {getTemperatura} from '../Helpers/GetWeather.js'


 export const useWeather = async() =>{
  const temperatura = await getTemperatura();
  const weatherStore = useWeatherStore();
  weatherStore.temperatura = temperatura;
}
