import React, { ReactElement } from 'react';
import PATH from '@constants/path';
import Grid from '@components/commons/Grid';
import * as S from './Header.style';

export const ASSETS = {
    TITLE: `Goo.Blog`,
};

function Header(): ReactElement {
    return (
        <S.HeaderWrapper>
            <Grid>
                <S.BlogTitle href={PATH.HOME}>{ASSETS.TITLE}</S.BlogTitle>
            </Grid>
        </S.HeaderWrapper>
    );
}

export default Header;
