import { app, query, action } from "@wasp.sh/spec";
import { getAccounts } from "./src/operations/accounts" with { type: "ref" };
import { createJournalEntry } from "./src/operations/journal" with { type: "ref" };

export default app({
  name: "contabilidadSri",
  wasp: { version: "0.25.0" },
  title: "Motor Contable SRI (Ecuador)",

  auth: {
    userEntity: "User",
    methods: {
      usernameAndPassword: {},
    },
    onAuthFailedRedirectTo: "/login",
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
