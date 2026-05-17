import { spawn } from "node:child_process";
import { colorConsole } from "./console/colors";

export function spawnExe(command: string, args: string, flags: string) {
  try {
    const cliSpawn = spawn(command, [args, flags], {
      stdio: "overlapped",
      shell: true,
    });
    cliSpawn.stderr.on("error", (error) => {
      colorConsole(`Error on child process: ${error}`, "error");
      return;
    });

    // Check if it's neccesary stderr & on ('close')

    return cliSpawn.stdout;
  } catch (error) {
    colorConsole(`Unexpected error appears: ${error}`, "error");
    throw new Error(`Error on: ${error}`);
  }
}
