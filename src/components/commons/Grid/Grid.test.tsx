import React from 'react';
import { render } from '@testing-library/react';
import Grid from '@components/commons/Grid';

describe('Grid Component', () => {
    it('그리드의 넓이가 항상 700px인가', () => {
        const utils = render(
            <Grid>
                <div></div>
            </Grid>,
        );

        expect(utils.getByTestId('grid')).toHaveStyle(`width: 700px`);
    });
});
