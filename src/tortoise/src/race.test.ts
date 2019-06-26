import { race } from '.';
describe('race tests', () => {
  test('should return the result in hour when speedA > speedB', () => {
    const letsRace = race;
    const speedA = 850;
    const speedB = 720;
    const gap = 70;
    const result = letsRace(speedA, speedB, gap);
    expect(result).toStrictEqual(1);
  });
  test('should fail is input is not a number', () => {
    interface MockRaceInterface {
      // tslint:disable-next-line: no-any
      (_: any, __: number, ___: number): number;
    }

    const letsRace = race as MockRaceInterface;
    const speedA = 'hello';
    const speedB = 720;
    const gap = 70;

    expect(() => {
      letsRace(speedA, speedB, gap);
    }).toThrow();
  });

  test('should fail is input is too low', () => {
    const speedA = 850;
    const speedB = -1;
    const gap = 70;

    expect(() => {
      race(speedA, speedB, gap);
    }).toThrow();
  });
});
