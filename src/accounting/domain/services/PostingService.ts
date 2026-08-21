import { Money } from '../value-objects/Money';
import { JournalLine } from '../entities/JournalEntry';

export class DoubleEntryViolation extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DoubleEntryViolation';
  }
}

export class PostingService {
  static readonly MIN_LINES = 2;

  static validateDoubleEntry(lines: JournalLine[]): void {
    if (lines.length < PostingService.MIN_LINES) {
      throw new DoubleEntryViolation(
        `Un asiento requiere al menos ${PostingService.MIN_LINES} líneas.`,
      );
    }

    let totalDebit = Money.zero();
    let totalCredit = Money.zero();

    for (const line of lines) {
      if (line.debit.isZero() && line.credit.isZero()) {
        throw new DoubleEntryViolation('Una línea no puede tener débito y crédito en cero.');
      }
      if (!line.debit.isZero() && !line.credit.isZero()) {
        throw new DoubleEntryViolation('Una línea no puede tener débito y crédito a la vez.');
      }
      totalDebit = totalDebit.add(line.debit);
      totalCredit = totalCredit.add(line.credit);
    }

    if (!totalDebit.equals(totalCredit)) {
      throw new DoubleEntryViolation(
        `Asiento desbalanceado: débito ${totalDebit} ≠ crédito ${totalCredit}.`,
      );
    }
  }
}
