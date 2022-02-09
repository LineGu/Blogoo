import React from 'react';
import { render } from './test-utils';
import Header from '@components/commons/Header';

describe('Header Component', () => {
    it('match snapshot', () => {
        const utils = render(<Header />);
        expect(utils.container).toMatchSnapshot();
    });
    it('has correct name', () => {
        const utils = render(<Header />);

        expect(utils.getByText(`Goo's Blog`)).toBeInTheDocument();
    });
});
