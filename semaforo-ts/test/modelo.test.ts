import { Color, Modelo } from "../app/modelo";

describe("modelo", () => {
  test("color es rojo cuando T > 30", () => {
    const proveedorDeTemperatura = {
      obtenerTemperatura: jest.fn().mockReturnValue(40),
    };
    const modelo = new Modelo(proveedorDeTemperatura);
    const colorResultante = modelo.ObtenerColor();
    expect(colorResultante).toBe(Color.Rojo);
  });

  test("color es verde cuando T < 15", () => {
    const proveedorDeTemperatura = {
      obtenerTemperatura: jest.fn().mockReturnValue(10),
    };
    const modelo = new Modelo(proveedorDeTemperatura);
    const colorResultante = modelo.ObtenerColor();
    expect(colorResultante).toBe(Color.Verde);
  });

  test("color es amarillo cuando 15 <= T <= 30", () => {
    const proveedorDeTemperatura = {
      obtenerTemperatura: jest.fn().mockReturnValue(25),
    };
    const modelo = new Modelo(proveedorDeTemperatura);
    const colorResultante = modelo.ObtenerColor();
    expect(colorResultante).toBe(Color.Amarillo);
  });
});
