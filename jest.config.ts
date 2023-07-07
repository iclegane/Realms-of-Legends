import { defaults } from 'jest-config';

const config = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};

export default config;
