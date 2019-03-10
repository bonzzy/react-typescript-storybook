module.exports = {
    verbose: true,
    "coverageThreshold": {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": 80
        }
    },
    "forceCoverageMatch": ["^(?!.*test).+\\.ts"],
    "setupFilesAfterEnv": ["./jest.setup.js"],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "testPathIgnorePatterns": [
        "/node_modules/",
        "/lib/"
    ],
    "testMatch": [
        "**/tests/?(*.)+(spec|test).ts?(x)"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "json"
    ]
};
