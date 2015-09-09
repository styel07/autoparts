import Autoparts from './Autoparts';

export default class CosmeticPart extends Autoparts {

    constructor(color, material, controls, cost, size, maker) {
      super(cost, size, maker);

      this.partColor = partColor;
      this.partMaterial = isMechanic;
      this.hasControls = containFluid;
    }

  get partColor() {
    return this.partColor;
  }

  set partColor( color ) {
    this.partColor = color;
  }

  get partMaterial() {
    return this.partMaterial;
  }

  set partMaterial( material ) {
    this.partMaterial = material;
  }

  get hasControls() {
    return this.hasControls;
  }

  set hasControls( control ) {
    this.hasControls = control;
  }
}
