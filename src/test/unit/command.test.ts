import { it, describe, expect } from "vitest";
import { commandAssembly } from "../../common/command";
import { mockingCommandArgs } from "../mock/mocking-values";

describe("commandAssembly", () => {
  mockingCommandArgs.map((item) => {
    it("should return a object with the correct arguments", () => {
      expect(
        commandAssembly(
          item.selectFolder,
          item.selectPkgManager,
          item.inputPkg,
          item.depsConfirm,
        ),
      );
    });
  });
});
