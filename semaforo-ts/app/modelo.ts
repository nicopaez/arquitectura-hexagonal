export class Modelo {
  constructor(private proveedorDeTemperatura: ProveevedorDeTemperatura) {}

  ObtenerColor(): Color {
    const temp = this.proveedorDeTemperatura.obtenerTemperatura();
    if (temp > 30) {
      return Color.Rojo;
    }
    if (temp < 15) {
      return Color.Verde;
    }
    return Color.Amarillo;
  }
}

export enum Color {
  Rojo,
  Amarillo,
  Verde,
}

export interface ProveevedorDeTemperatura {
  obtenerTemperatura(): number;
}
