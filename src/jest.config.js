module.exports = {
    moduleNameMapper: {
        // Map module names to paths or mock modules
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        // Add more mappings as needed
    },
    // Other Jest configurations...
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    // other configurations...
};