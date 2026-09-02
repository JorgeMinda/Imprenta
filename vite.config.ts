import { defineConfig } from "vitest/config";
import { wasp } from "wasp/client/vite";

export default defineConfig({
  server: {
    open: false,
  },
  plugins: [wasp()],
  test: {
    globals: true,
  },
});
