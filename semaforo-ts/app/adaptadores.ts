import { ProveevedorDeTemperatura } from "./modelo";
import request from "sync-request";

export class OpenWeather implements ProveevedorDeTemperatura {
  constructor(private apiKey: string) {}

  obtenerTemperatura(): number {
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const lat = -34;
    const lon = -58;
    try {
      const res = request("GET", apiUrl, {
        qs: {
          lat: lat,
          lon: lon,
          appid: this.apiKey,
        },
      });
      const data = JSON.parse(res.getBody("utf8"));
      const temperaturaKelvin = data.main.temp;
      return temperaturaKelvin - 273.15; // Convert from Kelvin to Celsius
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
