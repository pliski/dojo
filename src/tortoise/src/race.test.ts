import { race } from '.';
describe('race tests', () => {
  test('should return the result in hour when speedA > speedB', async () => {
    const letsRace = race;
    const speedA = 850;
    const speedB = 720;
    const gap = 70;
    const result = letsRace(speedA, speedB, gap);
    expect(result).toStrictEqual(1);
  });
});
