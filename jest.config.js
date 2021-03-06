module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['./src/setupEnzyme.ts', './src/setupTests.ts'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
};
