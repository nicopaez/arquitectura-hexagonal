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

  test("color es verder cuando T < 15", () => {
    const proveedorDeTemperatura = {
      obtenerTemperatura: jest.fn().mockReturnValue(10),
    };
    const modelo = new Modelo(proveedorDeTemperatura);
    const colorResultante = modelo.ObtenerColor();
    expect(colorResultante).toBe(Color.Verde);
  });
});
