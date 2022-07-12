//% color="#4A148C" weight=10
namespace bitwise {
  /**
   * The bitwise AND operator (&) returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
   */
  //% block
  export function and(a: number, b: number): number {
    return a & b;
  }

  /**
   * The bitwise OR operator (|) returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.
   */
  //% block
  export function or(a: number, b: number): number {
    return a | b;
  }

  /**
   * The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
   */
  //% block
  export function xor(a: number, b: number): number {
    return a ^ b;
  }

  /**
   * The bitwise NOT operator (~) inverts the bits of its operand. Like other bitwise operators, it converts the operand to a 32-bit signed integer.
   */
  //% block
  export function not(a: number): number {
    return ~a;
  }
}
