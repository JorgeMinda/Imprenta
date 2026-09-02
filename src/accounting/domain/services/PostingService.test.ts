import { describe, it, expect } from 'vitest';
import { PostingService, DoubleEntryViolation } from './PostingService';
import { JournalLineDraft } from '../entities/JournalEntry';

const line = (accountId: string, debit: number, credit: number): JournalLineDraft => ({
  accountId,
  debitCents: debit,
  creditCents: credit,
});

describe('PostingService.validateDoubleEntry', () => {
  it('acepta un asiento balanceado', () => {
    const lines = [line('1.1.01.01', 10000, 0), line('2.1.01.01', 0, 10000)];
    expect(() => PostingService.validateDoubleEntry(lines)).not.toThrow();
  });

  it('rechaza asiento desbalanceado', () => {
    const lines = [line('1.1.01.01', 10000, 0), line('2.1.01.01', 0, 9000)];
    expect(() => PostingService.validateDoubleEntry(lines)).toThrow(DoubleEntryViolation);
  });

  it('rechaza línea con débito y crédito simultáneos', () => {
    const lines = [line('1.1.01.01', 10000, 10000), line('2.1.01.01', 0, 20000)];
    expect(() => PostingService.validateDoubleEntry(lines)).toThrow(DoubleEntryViolation);
  });

  it('rechaza menos de dos líneas', () => {
    expect(() => PostingService.validateDoubleEntry([line('1', 10000, 0)])).toThrow(
      DoubleEntryViolation,
    );
  });
});
