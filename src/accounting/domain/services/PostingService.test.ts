import { describe, it, expect } from 'vitest';
import { PostingService, DoubleEntryViolation } from './PostingService';
import { JournalLine } from '../entities/JournalEntry';
import { Money } from '../value-objects/Money';

const line = (accountId: string, debit: number, credit: number): JournalLine => ({
  accountId,
  debit: Money.fromDecimal(debit),
  credit: Money.fromDecimal(credit),
});

describe('PostingService.validateDoubleEntry', () => {
  it('acepta un asiento balanceado', () => {
    const lines = [line('1.1.01.01', 100, 0), line('2.1.01.01', 0, 100)];
    expect(() => PostingService.validateDoubleEntry(lines)).not.toThrow();
  });

  it('rechaza asiento desbalanceado', () => {
    const lines = [line('1.1.01.01', 100, 0), line('2.1.01.01', 0, 90)];
    expect(() => PostingService.validateDoubleEntry(lines)).toThrow(DoubleEntryViolation);
  });

  it('rechaza línea con débito y crédito simultáneos', () => {
    const lines = [line('1.1.01.01', 100, 100), line('2.1.01.01', 0, 200)];
    expect(() => PostingService.validateDoubleEntry(lines)).toThrow(DoubleEntryViolation);
  });

  it('rechaza menos de dos líneas', () => {
    expect(() => PostingService.validateDoubleEntry([line('1', 100, 0)])).toThrow(
      DoubleEntryViolation,
    );
  });
});
