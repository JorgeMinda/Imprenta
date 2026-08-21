import { describe, it, expect } from 'vitest';
import { Money } from './Money';

describe('Money', () => {
  it('convierte decimales a céntimos sin pérdida de precisión', () => {
    expect(Money.fromDecimal('10.50').amountCents).toBe(1050n);
    // 0.1 + 0.2 es exacto porque usamos enteros, no flotantes.
    expect(Money.fromDecimal(0.1).add(Money.fromDecimal(0.2)).amountCents).toBe(30n);
  });

  it('suma y resta correctamente', () => {
    expect(Money.fromDecimal(10).add(Money.fromDecimal(5.5)).amountCents).toBe(1550n);
    expect(Money.fromDecimal(10).subtract(Money.fromDecimal(3)).amountCents).toBe(700n);
  });

  it('nego y compara', () => {
    expect(Money.fromDecimal(10).negate().amountCents).toBe(-1000n);
    expect(Money.fromDecimal(10).equals(Money.fromDecimal(10))).toBe(true);
    expect(Money.fromDecimal(10).isZero()).toBe(false);
    expect(Money.zero().isZero()).toBe(true);
  });
});
