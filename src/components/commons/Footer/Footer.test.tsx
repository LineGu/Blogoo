import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Footer from '@components/commons/Footer';
import { COPYRIGHT_TEXT, SNS_LINKS } from './Footer';

describe('Grid Component', () => {
    it('저작권 정보가 모두 잘 들어갔는지 확인', () => {
        const utils = render(<Footer />);
        Object.values(COPYRIGHT_TEXT).forEach((text) => {
            expect(utils.getByText(text)).toBeInTheDocument();
        });
    });

    it('깃허브 링크가 제대로 걸렸는지 확인', () => {
        const utils = render(<Footer />);

        expect(utils.getByAltText('GitHub').closest('a')).toHaveAttribute('href', SNS_LINKS.GITHUB);
    });
});
