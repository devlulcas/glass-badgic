export default function randint(min: number, max: number): number {
  const result = Math.random() * (max - min) + min;
  return result;
}
