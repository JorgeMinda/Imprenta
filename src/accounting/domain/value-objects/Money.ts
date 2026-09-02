export type Currency = 'USD';

export class Money {
  private constructor(
    public readonly amountCents: bigint,
    public readonly currency: Currency,
  ) {
    if (currency !== 'USD') {
      throw new Error('Solo se soporta la moneda USD (Ecuador).');
    }
  }

  static zero(currency: Currency = 'USD'): Money {
    return new Money(0n, currency);
  }

  static fromCents(cents: bigint | number | string, currency: Currency = 'USD'): Money {
    return new Money(BigInt(cents), currency);
  }

  static fromDecimal(amount: number | string, currency: Currency = 'USD'): Money {
    const cents = Math.round(Number(amount) * 100);
    return new Money(BigInt(cents), currency);
  }

  add(other: Money): Money {
    this.assertSameCurrency(other);
    return new Money(this.amountCents + other.amountCents, this.currency);
  }

  subtract(other: Money): Money {
    this.assertSameCurrency(other);
    return new Money(this.amountCents - other.amountCents, this.currency);
  }

  negate(): Money {
    return new Money(-this.amountCents, this.currency);
  }

  equals(other: Money): boolean {
    return this.currency === other.currency && this.amountCents === other.amountCents;
  }

  isZero(): boolean {
    return this.amountCents === 0n;
  }

  isPositive(): boolean {
    return this.amountCents > 0n;
  }

  toString(): string {
    const value = (Number(this.amountCents) / 100).toFixed(2);
    return `${this.currency} ${value}`;
  }

  toJSON(): { amountCents: string; currency: Currency } {
    return { amountCents: this.amountCents.toString(), currency: this.currency };
  }

  private assertSameCurrency(other: Money): void {
    if (this.currency !== other.currency) {
      throw new Error(`Monedas incompatibles: ${this.currency} vs ${other.currency}`);
    }
  }
}
