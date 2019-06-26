import { Tortoise } from './Tortoise';
describe('Tortoise class tests', () => {
  test('should instantiate a Tortoise object', async () => {
    const tortoise = new Tortoise();
    expect(tortoise).toBeInstanceOf(Tortoise);
  });

  test('should return the result in hour when speedA > speedB', async () => {
    const tortoise = new Tortoise();
    const speedA = 850;
    const speedB = 720;
    const gap = 70;
    const result = tortoise.race(speedA, speedB, gap);
    expect(result).toStrictEqual(0.5);
  });
});
