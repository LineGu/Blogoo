import '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { configure } from '@testing-library/dom';

configure({
    getElementError: (message, container) => {
        const error = new Error(message!);
        error.name = 'TestingLibraryElementError';
        error.stack = undefined;
        return error;
    },
});
