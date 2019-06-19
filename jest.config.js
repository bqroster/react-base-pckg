const path = require('path');

module.exports = {
    roots: [
        "<rootDir>/src"
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: [
        'ts', 'tsx',
        'js', 'jsx',
        'json'
    ],
    globals: {
        'ts-jest': {
            tsConfig: path.resolve(__dirname, 'tsconfig.test.json')
        }
    },
    setupFilesAfterEnv: [
        "<rootDir>/enzyme.config.js"
    ],
    moduleNameMapper: {
        "~/(.*)": "<rootDir>/src/$1"
      }
};