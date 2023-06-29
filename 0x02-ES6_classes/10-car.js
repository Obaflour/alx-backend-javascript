const CAR_KEY = Symbol("Car Key");

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const newCar = new Car();
    Object.getOwnPropertySymbols(this).forEach((key) => {
      newCar[key] = this[key];
    });
    return newCar;
  }
}
}
