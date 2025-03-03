import { OpenWeather } from "./adaptadores";
import { Color, Modelo } from "./modelo";
import dotenv from "dotenv";
dotenv.config();

const apiKey: string = process.env.OPENWEATHER_API_KEY || "fake_key";
const proveedorDeTemperatura = new OpenWeather(apiKey);
const modelo = new Modelo(proveedorDeTemperatura);
console.log("Temperatura color : " + Color[modelo.ObtenerColor()]);
