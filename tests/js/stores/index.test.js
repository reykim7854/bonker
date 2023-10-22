// @vitest-environment happy-dom

import { describe, expect, test } from "vitest";
import { store } from "../../../src/js/stores/index.js";

describe("store index", () => {
  test("bonkerApp => { theme: auto }", () => {
    expect(store.getters.bonkerApp).toBeTruthy();
  });
});
