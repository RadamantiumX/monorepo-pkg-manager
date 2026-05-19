import { defineConfig } from "vitest/config";

export const vitestConfig = defineConfig({
  test: {
    dangerouslyIgnoreUnhandledErrors: true,
  },
});
