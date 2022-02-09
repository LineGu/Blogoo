import React, { ReactElement } from 'react';
import Link from 'next/link';
import PATH from '@constants/path';
import Grid from '@components/commons/Grid';
import * as S from './Header.style';

const ASSETS = {
    TITLE: `Goo's Blog`,
};

function Header(): ReactElement {
    return (
        <S.HeaderWrapper>
            <Grid>
                <Link href={PATH.HOME}>
                    <S.Title>{ASSETS.TITLE}</S.Title>
                </Link>
            </Grid>
        </S.HeaderWrapper>
    );
}

export default Header;
