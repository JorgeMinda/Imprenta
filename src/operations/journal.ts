import { CreateJournalEntry } from '../accounting/application/use-cases/CreateJournalEntry';
import { PrismaJournalRepository } from '../accounting/infrastructure/prisma/repositories/PrismaJournalRepository';
import { JournalEntryDraft } from '../accounting/domain/entities/JournalEntry';

export const createJournalEntry = async (args: JournalEntryDraft, context: any) => {
  const repository = new PrismaJournalRepository(context.entities.JournalEntry);
  const useCase = new CreateJournalEntry(repository);
  return useCase.execute(args);
};

export const getJournalEntries = async (args: { periodId?: string }, context: any) => {
  const where: any = {};
  if (args.periodId) {
    where.periodId = args.periodId;
  }

  return context.entities.JournalEntry.findMany({
    where,
    include: {
      lines: {
        include: { account: true },
      },
      period: true,
    },
    orderBy: { date: 'desc' },
  });
};

export const getJournalEntryById = async (args: { id: string }, context: any) => {
  return context.entities.JournalEntry.findUnique({
    where: { id: args.id },
    include: {
      lines: {
        include: { account: true },
      },
      period: true,
    },
  });
};

export const getFiscalPeriods = async (_args: unknown, context: any) => {
  return context.entities.FiscalPeriod.findMany({
    orderBy: { startDate: 'desc' },
  });
};
