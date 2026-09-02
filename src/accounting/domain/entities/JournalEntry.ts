import { Money } from '../value-objects/Money';

export type SourceType =
  | 'FACTURA_VENTA'
  | 'FACTURA_COMPRA'
  | 'RETENCION'
  | 'NOTA_CREDITO'
  | 'NOTA_DEBITO'
  | 'DIARIO_GENERAL'
  | 'AJUSTE';

export interface JournalLine {
  accountId: string;
  debit: Money;
  credit: Money;
  description?: string;
}

export interface JournalLineDraft {
  accountId: string;
  debitCents: string | number;
  creditCents: string | number;
  description?: string;
}

export interface JournalEntryDraft {
  date: string;
  concept: string;
  reference?: string;
  sourceType: SourceType;
  periodId: string;
  lines: JournalLineDraft[];
  createdBy: string;
}

export function toMoney(draft: JournalLineDraft): { debit: Money; credit: Money } {
  return {
    debit: Money.fromCents(draft.debitCents),
    credit: Money.fromCents(draft.creditCents),
  };
}
