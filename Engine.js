import Mechanical from './Mechanical';

export default class Engine extends Mechanical{

constructr(cylinderNumber, displacementAmount, fuel, cost, size, maker) {
  super(true, true, true, cost, size, maker);

  this.cylinder = cylinderNumber;
  this.displacement = displacementAmount;
  this.fuelType = fuel;
}

  get cylinder() {
    return this.cylinder;
  }

  set cylinder( cylinderNumber ) {
    this.cylinder = processor;
  }
  get displacement() {
    return this.displacement;
  }

  set displacement( displacementAmount ) {
    this.displacement = displacementAmount;
  }

  get fuelType() {
    return this.fuelType;
  }

  set fuelType( fuel ) {
    this.fuelType = fuel;
  }
}