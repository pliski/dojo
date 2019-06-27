import { Runner } from './Runner';

describe('Runner class tests', () => {
  test('should instantiate a Tortoise object', () => {
    const name = 'Runner_Test';
    const speed = 42;
    const tortoise = new Runner(name, speed);
    expect(tortoise).toBeInstanceOf(Runner);
    expect(tortoise.name).toStrictEqual(name);
    expect(tortoise.averageSpeed).toStrictEqual(speed);
  });
});
