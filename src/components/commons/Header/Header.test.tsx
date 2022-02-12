import React from 'react';
import { render } from '@testing-library/react';
import Header from '@components/commons/Header';

describe('Header Component', () => {
    it('스냅샷과 일치하는가', () => {
        const utils = render(<Header />);
        expect(utils.container).toMatchSnapshot();
    });
    it('헤더에 이름이 잘 들어가 있는가', () => {
        const utils = render(<Header />);

        expect(utils.getByText(`Goo's Blog`)).toBeInTheDocument();
    });
});
