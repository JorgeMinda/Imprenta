import { Money } from '../value-objects/Money';

export interface JournalLine {
  accountId: string;
  debit: Money;
  credit: Money;
  description?: string;
}

export interface JournalEntryDraft {
  date: Date;
  concept: string;
  reference?: string;
  sourceType: string;
  periodId: string;
  lines: JournalLine[];
  createdBy: string;
}
