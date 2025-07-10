module.exports = {
  transform: {
    "^.+\\.m?js$": ["babel-jest", { configFile: "./babel.config.js" }]
  },
  transformIgnorePatterns: ["/node_modules/"],
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.?(m)js?(x)", "**/?(*.)+(spec|test).?(m)js?(x)"],
  extensionsToTreatAsEsm: [".mjs"],
};
