import { race } from '.';
describe('race tests', () => {
  test('should return the result in hour when leader is slower than trailer', () => {
    const letsRace = race;
    const leaderSpeed = 720;
    const trailerSpeed = 850;
    const gap = 70;
    const result = letsRace(leaderSpeed, trailerSpeed, gap);
    expect(result).toStrictEqual(1);
  });
  test('should return null when leader is faster then trailer', () => {
    const letsRace = race;
    const leaderSpeed = 850;
    const trailerSpeed = 720;
    const gap = 70;
    const result = letsRace(leaderSpeed, trailerSpeed, gap);
    expect(result).toBeNull();
  });
  test('should fail is input is not a number', () => {
    interface MockRaceInterface {
      // tslint:disable-next-line: no-any
      (_: any, __: number, ___: number): number;
    }

    const letsRace = race as MockRaceInterface;
    const leaderSpeed = 'hello';
    const trailerSpeed = 720;
    const gap = 70;

    expect(() => {
      letsRace(leaderSpeed, trailerSpeed, gap);
    }).toThrow();
  });

  test('should fail is input is too low', () => {
    const leaderSpeed = 850;
    const trailerSpeed = -1;
    const gap = 70;

    expect(() => {
      race(leaderSpeed, trailerSpeed, gap);
    }).toThrow();
  });
});
