import MechanicalPart from 'MechanicalPart';

export default class Trasmission extends MechanicalPart {
  constructor(axleNum, linkType, driveType) {
    super();

    this.axles = axleNum;
    this.linkType = linkage;
    this.driveType = driveTrain;
  }

    get axles() {
    return this.axles;
  }

  set axles( axleNum ) {
    this.axles = axleNum;
  }
  get linkType() {
    return this.linkType;
  }

  set linkType( linkage ) {
    this.linkType = linkage;
  }

  get driveType() {
    return this.driveType;
  }

  set driveType( driveTrain ) {
    this.driveType = driveTrain;
  }
}