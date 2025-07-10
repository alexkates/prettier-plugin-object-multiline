module.exports = {
  transform: {
    "^.+\\.m?js$": ["babel-jest", { configFile: "./babel.config.cjs" }]
  },
  transformIgnorePatterns: ["/node_modules/"],
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.?(m)js?(x)"]
};
