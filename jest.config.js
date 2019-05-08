module.exports = {
  moduleFileExtensions: ["ts", "js", "tsx"],
  transform: {
    "\\.(jade)$": "./test-utils/transform-jade.js",
    "\\.(js)$": "babel-jest",
    "\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  testRegex: "(/__tests__/.*|\\.*(test))\\.(ts|js|tsx)$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/test-utils/test-setup.ts"]
};
