export default function binaryToDecimal(binary: string): number {
  let result = 0;

  for (let index = 0; index < binary.length; index += 1) {
    result = result * 2 + Number(binary[index]);
  }

  return result;
}
