import { JournalRepository } from '@src/accounting/domain/repositories/JournalRepository';
import { JournalEntryDraft } from '@src/accounting/domain/entities/JournalEntry';

export class PrismaJournalRepository implements JournalRepository {
  constructor(private readonly delegate: any) {}

  async save(draft: JournalEntryDraft): Promise<{ id: string }> {
    const created = await this.delegate.create({
      data: {
        date: new Date(draft.date),
        concept: draft.concept,
        reference: draft.reference,
        sourceType: draft.sourceType,
        periodId: draft.periodId,
        createdBy: draft.createdBy,
        lines: {
          create: draft.lines.map((line) => ({
            accountId: line.accountId,
            debitCents: BigInt(line.debitCents),
            creditCents: BigInt(line.creditCents),
            description: line.description,
          })),
        },
      },
    });
    return { id: created.id };
  }
}
