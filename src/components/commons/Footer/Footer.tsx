import React, { ReactElement } from 'react';
import * as S from './Footer.styles';
import GitHubImage from '/public/icons/ic_github.svg';
import SNS from './components/SNS';
import CopyRight from './components/Copyright/Copyright';
import Palette from '@styles/Palette';

export const SNS_LINKS = {
    GITHUB: 'https://github.com/linegu',
};

export const COPYRIGHT_TEXT = {
    MAKER: '© goo',
    DESIGNER: 'designed by JooHyeon Lee',
};

function Footer(): ReactElement {
    return (
        <S.FooterWrapper>
            <S.FooterContent>
                <CopyRight.List>
                    <CopyRight.Item content={COPYRIGHT_TEXT.MAKER} />
                    <CopyRight.Item
                        content={COPYRIGHT_TEXT.DESIGNER}
                        decorate={{ textColor: Palette.GREY, fontWeight: 'regular' }}
                    />
                </CopyRight.List>

                <SNS.List>
                    <SNS.Item href={SNS_LINKS.GITHUB} alt="GitHub" src={GitHubImage} />
                </SNS.List>
            </S.FooterContent>
        </S.FooterWrapper>
    );
}

export default Footer;
