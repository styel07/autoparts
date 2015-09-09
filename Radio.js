import CosmeticPart from './CosmeticPart';

export default class Radio extends CosmeticPart {
  constructor(cdplayer, bluetooth, color, material, controls, cost, size, maker) {
    super(color, material, controls, cost, size, 'Bose');

    this.hasCD = cdplayer;
    this.hasBlootooth = bluetooth;
    this.speakers = 4;
  }

  get hasCD() {
    return this.hasCD;
  }

  set hasCD( cdplayer ) {
    this.hasCD = cdplayer;
  }

  get hasBlootooth() {
    return this.hasBlootooth;
  }

  set hasBlootooth( bluetooth ) {
    this.hasBlootooth = bluetooth;
  }

  get speakers() {
    return this.speakers;
  }

  set speakers( speakersNum ) {
    this.speakers = speakersNum;
  }
}