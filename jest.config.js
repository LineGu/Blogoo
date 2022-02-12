module.exports = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    snapshotResolver: '<rootDir>/src/test/snapshotResolver.js',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '\\.svg': '<rootDir>/src/test/__mocks__/svgrMock.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
            './src/test/__mocks__/fileMock.js',
        ),
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@icons(.*)$': '<rootDir>/public/icons$1',
        '^@images(.*)$': '<rootDir>/public/images$1',
        '^@styles(.*)$': '<rootDir>/styles$1',
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json',
        },
    },
};
