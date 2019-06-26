import { Tortoise } from './Tortoise';
describe('Tortoise class tests', () => {
  test('should instantiate a Tortoise object', async () => {
    const tortoise = new Tortoise();
    expect(tortoise).toBeInstanceOf(Tortoise);
  });

  test('should go for 170', async () => {
    const tortoise = new Tortoise();
    const gone = tortoise.go();
    expect(gone).toStrictEqual(170);
  });
});
