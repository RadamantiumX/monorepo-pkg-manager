import type { Statement } from "../types";
/**
 * Statements structures Guidance:
 *  --> npm install <package-name> --workspace=<workspace-name> <if is dev-dep "-D" or "--save-dev">
 *  --> pnpm add <if is dev-dep "-D"> <package-name> <flag: filter workspace>
 *  --> yarn workspace <workspace-name> add <if is dev-dep "-D"> <package-name>
 */
/**
 * Takes the package manager selected and create the object with the complete install command
 * @param {string} selectFolder Workspace folder selected.
 * @param {string} selectPkgManager Package manager selected, can be npm, pnpm or yarn
 * @param {string} inputPkg Current dependency to install
 * @param {boolean} depsConfirm If the dependency it's only for development
 * @returns {Statement} All elements in order to be used into child process
 */
export function commandAssembly(
  selectFolder: string,
  selectPkgManager: string,
  inputPkg: string,
  depsConfirm: boolean,
): Statement {
  const command = {
    ...(selectPkgManager === "npm" && {
      first: `${selectPkgManager} i`,
      second: `${inputPkg}`,
      third: `--workspace=${selectFolder} ${depsConfirm ? "-D" : ""}`,
    }),
    ...(selectPkgManager === "pnpm" && {
      first: `${selectPkgManager} add`,
      second: `${depsConfirm ? "-D" : ""} ${inputPkg}`,
      third: `--filter ${selectFolder}`,
    }),
    ...(selectPkgManager === "yarn" && {
      first: `${selectPkgManager} workspace`,
      second: `${selectFolder} ${depsConfirm ? "-D" : ""}`,
      third: `${inputPkg}`,
    }),
  };

  return command;
}
