export default function decimalToBinary(decimal: number): string {
  let result = '';
  let quotient = decimal;
  let leastSignificant = quotient;

  if (decimal < 1) {
    return '0';
  }

  while (quotient > 0) {
    leastSignificant = quotient % 2;
    result += String(leastSignificant);
    quotient = Math.floor(quotient / 2);
  }

  return result;
}
