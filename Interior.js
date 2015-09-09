import CosmeticPart from './CosmeticPart';

export default class Interior extends CosmeticPart{

  constructor( seatsNum,lightsNum, color, controls, cost, size, maker) {
    super(color, 'leather', controls, cost, size, maker);

    this.cupholders = 4;
    this.seat = seatsNum;
    this.lights = lightsNum;
  }
}