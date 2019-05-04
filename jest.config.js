module.exports = {
  moduleFileExtensions: ["ts", "js"],
  // moduleNameMapper: {
  //     "^.+\\.(styl)$": "<rootDir>/test-utils/empty-module.ts"
  // },
  transform: {
    "\\.(jade)$": "./test-utils/transform-jade.js",
    "\\.(js)$": "babel-jest",
    "\\.(ts)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  testRegex: "(/__tests__/.*|\\.*(test))\\.(ts|js)$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/test-utils/test-setup.ts"]
};
