import React from 'react';
import { render } from '@testing-library/react';
import CustomLink from '@components/commons/CustomLink';

const mockHref = 'http://localhost:3000/example';

describe('Grid Component', () => {
    it('링크가 제대로 걸렸는지 확인', () => {
        const utils = render(<CustomLink href={mockHref}>link button</CustomLink>);

        expect(utils.getByRole('link')).toHaveAttribute('href', mockHref);
    });
});
