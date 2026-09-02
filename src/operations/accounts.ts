export const getAccounts = async (_args: unknown, context: any) => {
  return context.entities.Account.findMany({
    orderBy: { code: 'asc' },
    where: { active: true },
  });
};

export const getAccountById = async (args: { id: string }, context: any) => {
  return context.entities.Account.findUnique({
    where: { id: args.id },
    include: { children: true },
  });
};

export const getAccountTree = async (_args: unknown, context: any) => {
  const accounts = await context.entities.Account.findMany({
    orderBy: { code: 'asc' },
    where: { active: true },
  });

  const map = new Map<string, any>();
  const roots: any[] = [];

  for (const acc of accounts) {
    map.set(acc.id, { ...acc, children: [] });
  }

  for (const acc of accounts) {
    const node = map.get(acc.id)!;
    if (acc.parentId && map.has(acc.parentId)) {
      map.get(acc.parentId)!.children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
};
