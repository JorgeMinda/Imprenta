import { app, query, action, route, page } from "@wasp.sh/spec";
import { Dashboard } from "./src/MainPage" with { type: "ref" };
import { AccountsPage } from "./src/pages/AccountsPage" with { type: "ref" };
import { NewJournalEntryPage } from "./src/pages/NewJournalEntryPage" with { type: "ref" };
import { getAccounts } from "./src/operations/accounts" with { type: "ref" };
import { getAccountTree } from "./src/operations/accounts" with { type: "ref" };
import { getJournalEntries } from "./src/operations/journal" with { type: "ref" };
import { createJournalEntry } from "./src/operations/journal" with { type: "ref" };

export default app({
  name: "contabilidadSri",
  wasp: { version: "0.24" },
  title: "Motor Contable SRI (Ecuador)",

  auth: {
    userEntity: "User",
    methods: {
      usernameAndPassword: {},
    },
    onAuthFailedRedirectTo: "/login",
  },

  spec: [
    route("DashboardRoute", "/", page(Dashboard)),
    route("AccountsRoute", "/accounts", page(AccountsPage)),
    route("NewJournalEntryRoute", "/journal/new", page(NewJournalEntryPage)),

    query(getAccounts, {
      entities: ["Account"],
    }),
    query(getAccountTree, {
      entities: ["Account"],
    }),
    query(getJournalEntries, {
      entities: ["JournalEntry", "JournalLine", "Account", "FiscalPeriod"],
    }),

    action(createJournalEntry, {
      entities: ["JournalEntry", "JournalLine", "Account"],
    }),
  ],
});
