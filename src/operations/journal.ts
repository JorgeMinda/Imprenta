import { CreateJournalEntry } from '@src/accounting/application/use-cases/CreateJournalEntry';
import { PrismaJournalRepository } from '@src/accounting/infrastructure/prisma/repositories/PrismaJournalRepository';
import { JournalEntryDraft } from '@src/accounting/domain/entities/JournalEntry';

export const createJournalEntry = async (args: JournalEntryDraft, context: any) => {
  const repository = new PrismaJournalRepository(context.entities.JournalEntry);
  const useCase = new CreateJournalEntry(repository);
  return useCase.execute(args);
};
