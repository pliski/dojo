export function sanitizeNumber(name: string, value: number) {
  sanitizeString(name, value);
  sanitizeTooLow(name, value);
}

function sanitizeString(name: string, value: number) {
  if (typeof value !== 'number') {
    throw new Error(`${name} is not a number`);
  }
}

function sanitizeTooLow(name: string, value: number) {
  if (value < 0) {
    throw new Error(`${name} is too low`);
  }
}
