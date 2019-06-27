import { Runner } from '../runner/Runner';
import { RaceControl } from './RaceControl';

describe('RaceControl tests', () => {
  let raceControl: RaceControl;
  const distance = 70;
  beforeEach(() => {
    raceControl = new RaceControl();
  });

  test('should return the result in a formatted string when leader is slower than trailer', () => {
    const leader = new Runner('SlowTortoise', 720);
    const trailer = new Runner('TurboTortoise', 850);
    const result = raceControl.getFormattedGap(leader, trailer, distance);
    expect(result).toStrictEqual('0 32 18');
  });

  test('should return null when leader is faster then trailer', () => {
    const leader = new Runner('TurboTortoise', 850);
    const trailer = new Runner('SlowTortoise', 720);
    const result = raceControl.getFormattedGap(leader, trailer, distance);
    expect(result).toBeNull();
  });
});
