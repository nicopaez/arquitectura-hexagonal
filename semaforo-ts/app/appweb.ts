import express, { Request, Response } from "express";
import { Color, Modelo } from "./modelo";
import { OpenWeather } from "./adaptadores";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/color", (req: Request, res: Response) => {
  const apiKey: string = process.env.OPENWEATHER_API_KEY || "fake_key";
  const proveedorDeTemperatura = new OpenWeather(apiKey);
  const modelo = new Modelo(proveedorDeTemperatura);
  res.send({ "color-temperatura": Color[modelo.ObtenerColor()] });
});

app.listen(3000, () => {
  console.log("app running on port 3000");
});
