import { sanitizeNumber } from './numberSanitizer';

describe('numberSanitizer tests', () => {
  test('should fail is input is not a number', () => {
    interface MockSanitizerInterface {
      // tslint:disable-next-line: no-any
      (_: string, __: any): void;
    }

    const sanitizer = sanitizeNumber as MockSanitizerInterface;
    const name = 'sanitizerTest';
    const speed = 'hello';

    expect(() => {
      sanitizer(name, speed);
    }).toThrow();
  });

  test('should fail is input is too low', () => {
    const name = 'sanitizerTest';
    const speed = -1;

    expect(() => {
      sanitizeNumber(name, speed);
    }).toThrow();
  });
});
