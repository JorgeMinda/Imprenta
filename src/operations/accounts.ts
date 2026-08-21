export const getAccounts = async (_args: unknown, context: any) => {
  return context.entities.Account.findMany({ orderBy: { code: 'asc' } });
};
