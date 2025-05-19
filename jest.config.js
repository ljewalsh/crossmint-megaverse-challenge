const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  verbose: true,
  setupFiles: ["dotenv/config"],
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
};
