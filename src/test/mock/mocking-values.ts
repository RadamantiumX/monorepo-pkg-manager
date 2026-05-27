/**
 * Only for unit test
 */
export const mockInquirerReturn = {
  selectFolder: "api",
  selectPkgManager: "npm",
  inputPkg: "inquirer",
  depsConfirm: true,
  finishConfirm: true,
};

export const mockedOptions = {
  ws_folders: {
    message: "Select a workspace folder",
    choices: [
      {
        name: "api",
        value: "api",
        description: "mocked api folder",
      },
      {
        name: "client",
        value: "client",
        description: "mocked client folder",
      },
    ],
  },
};

export const mockStringData =
  '[{"name": "firstName", "path": "//path_1"}, {"name": "secondName", "path": "//path_2"}, {"name": "thirdName", "path": "//path_3"}]';
