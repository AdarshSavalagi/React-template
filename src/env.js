import devEnvironment from './environment/dev.json';
import prodEnvironment from './environment/prod.json';

export const flavor = 'dev';

function provideEnvironment(flavor) {
    switch (flavor) {
        case 'dev':
            return devEnvironment;
        case 'prod':
            return prodEnvironment;
        default:
            return devEnvironment;
    }
}

export default provideEnvironment(flavor);
