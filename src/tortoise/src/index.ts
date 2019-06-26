type raceParameter = [string, number];

const exit = process.exit;

function calculateHours(speedA: number, speedB: number, distance: number) {
  return Math.round(distance / (speedA - speedB));
}

export function race(speedA: number, speedB: number, distance: number) {
  sanitize(speedA, speedB, distance);
  return calculateHours(speedA, speedB, distance);
}

function sanitize(speedA: number, speedB: number, distance: number) {
  const aParameters: raceParameter[] = [
    ['SpeedA', speedA],
    ['SpeedB', speedB],
    ['Distance', distance],
  ];

  aParameters.forEach((t: raceParameter) => {
    sanitizeString(t[0], t[1]);
    sanitizeTooLow(t[0], t[1]);
  });
}

function sanitizeString(name: string, value: number) {
  if (typeof value !== 'number') {
    throw new Error(`${name} is not a number`);
  }
}

function sanitizeTooLow(name: string, value: number) {
  console.log('saniteTooLow', name, value);
  console.log('type', typeof value);
  if (value < 0) {
    throw new Error(`${name} is too low`);
  }
}
