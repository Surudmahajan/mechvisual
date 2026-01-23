export function scaleVectors(values, maxLen = 150) {
  const max = Math.max(...values.map(v => Math.abs(v))) || 1;
  return values.map(v => (v / max) * maxLen);
}
