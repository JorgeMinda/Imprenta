import { app, query, action } from "@wasp.sh/spec";
import { getAccounts } from "./src/operations/accounts" with { type: "ref" };
import { createJournalEntry } from "./src/operations/journal" with { type: "ref" };

export default app({
  name: "contabilidadSri",
  wasp: { version: "0.25.0" },
  title: "Motor Contable SRI (Ecuador)",

  db: {
    system: "PostgreSQL",
  },

  auth: {
    userEntity: "User",
    methods: {
      email: {},
    },
    onAuthFailedRedirectTo: "/login",
  },

  emailSender: {
    provider: "Dummy",
  },

  spec: [
    query(getAccounts, {
      entities: ["Account"],
    }),
    action(createJournalEntry, {
      entities: ["JournalEntry", "JournalLine", "Account"],
    }),
  ],
});
