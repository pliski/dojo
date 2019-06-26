const exit = process.exit;
function calculateHours(speedA: number, speedB: number, distance: number) {
  return Math.round(distance / (speedA - speedB));
}

export function race(speedA: number, speedB: number, distance: number) {
  sanitize(speedA, speedB, distance);
  return calculateHours(speedA, speedB, distance);
}

function sanitize(speedA: number, speedB: number, distance: number) {
  if (typeof speedA !== 'number') {
    console.error('SpeedA is not a number');
    exit(1);
  }
  if (typeof speedB !== 'number') {
    console.error('SpeedB is not a number');
    exit(1);
  }
  if (typeof distance !== 'number') {
    console.error('Distance is not a number');
    exit(1);
  }
}
