import CosmeticPart from './CosmeticPart';

export default class Body extends CosmeticPart {

  constructor( lights, spoiler, color, controls, cost, size, maker) {
    super(color, 'metel', controls, cost, size, maker);

    this.doorsNumber = 4;
    this.lightsNumber = lights;
    this.hasSpoiler = spoiler;
  }

  get doorsNumber() {
    return this.doorsNumber;
  }

  set doorsNumber( doors ) {
    this.doorsNumber = doors;
  }
  get lightsNumber() {
    return this.lightsNumber;
  }

  set lightsNumber( lights ) {
    this.lightsNumber = lights;
  }

  get hasSpoiler() {
    return this.hasSpoiler;
  }

  set hasSpoiler( spoiler ) {
    this.hasSpoiler = spoiler;
  }
}
