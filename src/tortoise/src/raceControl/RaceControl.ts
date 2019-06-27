import { Runner } from '../runner/Runner';
import { sanitizeNumber } from '../sanitizers/numberSanitizer';
import moment = require('moment');
export class RaceControl {
  getFormattedGap(leader: Runner, trailer: Runner, distance: number) {
    sanitizeNumber('distance', distance);

    const leaderSpeed = leader.averageSpeed;
    const trailerSpeed = trailer.averageSpeed;

    if (!this.checkOrder(leaderSpeed, trailerSpeed)) return null;
    const msGap = this.calculateMilliseconds(
      leaderSpeed,
      trailerSpeed,
      distance
    );
    return this.timeFormat(msGap);
  }

  private calculateMilliseconds(
    leaderSpeed: number,
    trailerSpeed: number,
    distance: number
  ): number {
    return (distance / (trailerSpeed - leaderSpeed)) * 3600000;
  }

  private timeFormat(gapMilliseconds: number): string {
    return moment.utc(gapMilliseconds).format('H mm ss');
  }

  private checkOrder(leaderSpeed: number, trailerSpeed: number): boolean {
    if (leaderSpeed >= trailerSpeed) return false;
    return true;
  }
}
