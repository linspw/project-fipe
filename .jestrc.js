module.exports = {
  setupFilesAfterEnv: [".src/config/jest.setup.js"],
  moduleNameMapper: {
    "^@(.*)$": "<rootDir>$1",
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "^@assets(.*)$": "<rootDir>/assets$1",
    "^@layouts(.*)$": "<rootDir>/layouts$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
    "^@modules(.*)$": "<rootDir>/modules$1",
  },
};
