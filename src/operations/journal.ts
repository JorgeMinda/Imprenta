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
