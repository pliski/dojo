import { sanitizeNumber } from '../sanitizers/numberSanitizer';

export class Runner {
  private _averageSpeed = 0;

  get averageSpeed(): number {
    return this._averageSpeed;
  }

  set averageSpeed(speed: number) {
    sanitizeNumber(this.name, speed);
    this._averageSpeed = speed;
  }

  constructor(public name: string, averageSpeed?: number) {
    if (averageSpeed) {
      this.averageSpeed = averageSpeed;
    }
  }
}
