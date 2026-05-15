import { select, confirm, input } from "@inquirer/prompts";
import options from "./options-choices";
import type { PromptValues } from "../types";
import colors from "ansi-colors";

/**
 * Takes the console prompts and return the answers
 * @returns
 */
export async function promptHandler(): Promise<PromptValues | void> {
  try {
    const selectFolder = await select({
      message: "",
      choices: [],
    });
    const selectPkgManager = await select(options.pkg_manager);
    const inputPkg = await input(options.pkg);
    const depsConfirm = await confirm(options.deps);
    const finishConfirm = await confirm(options.finish);
    if (!finishConfirm) {
      console.log(colors.bgMagenta("Installation cancelled..."));
      return;
    }
    return {
      selectFolder,
      selectPkgManager,
      inputPkg,
      depsConfirm,
      finishConfirm,
    };
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
    return;
  }
}
