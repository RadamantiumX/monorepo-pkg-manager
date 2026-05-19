import { spawn } from "node:child_process";
import { colorConsole } from "./console/colors";

export function spawnProcess(command: string, args: string, flags: string) {
  try {
    const cliSpawn = spawn(command, [args, flags], {
      stdio: "overlapped",
      shell: true,
    });
    cliSpawn.stderr.on("error", (error) => {
      colorConsole(`Error on child process: ${error}`, "error");
      return;
    });

    cliSpawn.on("exit", () => {
      colorConsole("The process succesfuly finish", "success");
    });

    return cliSpawn.stdout;
  } catch (error) {
    colorConsole(`Unexpected error appears: ${error}`, "error");
    throw new Error(`Error on: ${error}`);
  }
}
