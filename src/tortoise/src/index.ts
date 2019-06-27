import ms = require('ms');
import moment = require('moment');

type raceParameter = [string, number];

const exit = process.exit;

function calculateMilliseconds(
  leaderSpeed: number,
  trailerSpeed: number,
  distance: number
): number {
  return (distance / (trailerSpeed - leaderSpeed)) * 3600000;
}

function timeFormat(gapMilliseconds: number): string {
  return moment.utc(gapMilliseconds).format('H mm ss');
}

export function race(
  leaderSpeed: number,
  trailerSpeed: number,
  distance: number
) {
  sanitize(leaderSpeed, trailerSpeed, distance);
  if (!checkOrder(leaderSpeed, trailerSpeed)) return null;
  const msGap = calculateMilliseconds(leaderSpeed, trailerSpeed, distance);
  return timeFormat(msGap);
}

function checkOrder(leaderSpeed: number, trailerSpeed: number): boolean {
  if (leaderSpeed >= trailerSpeed) return false;
  return true;
}

function sanitize(leaderSpeed: number, trailerSpeed: number, distance: number) {
  const aParameters: raceParameter[] = [
    ['leaderSpeed', leaderSpeed],
    ['trailerSpeed', trailerSpeed],
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
