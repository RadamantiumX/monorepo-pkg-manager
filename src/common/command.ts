/**
 * All Statements structures Guidance:
 *  --> npm install <package-name> --workspace=<workspace-name> <if is dev-dep "-D" or "--save-dev">
 *  --> pnpm add <if is dev-dep "-D"> <package-name> <flag: filter workspace>
 *  --> yarn workspace <workspace-name> add <if is dev-dep "-D"> <package-name>
 *
 *
 */
export function commandAssembly(
  selectFolder: string,
  selectPkgManager: string,
  inputPkg: string,
  depsConfirm: boolean,
) {
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
