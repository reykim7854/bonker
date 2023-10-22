// @vitest-environment happy-dom

import { describe, expect, test } from "vitest";
import { ToggleTheme } from "../../../src/js/utils/toggle-theme.js";

const toggleTheme = new ToggleTheme();

describe("class ToggleTheme", () => {
  // positive test
  test.each(["true", "false", "auto"])("should set theme to '%s'", (v) => {
    toggleTheme.toggleTheme(v);
    expect(toggleTheme.fieldTheme).toBe(v);
  });

  // negative test
  test.each([true, false, "", {}, { theme: true }, null, undefined])(
    "should throw error if input -> %s",
    (v) => {
      expect(() => toggleTheme.toggleTheme(v)).toThrowError(
        /^Non acceptable type or value!$/,
      );
    },
  );
});
