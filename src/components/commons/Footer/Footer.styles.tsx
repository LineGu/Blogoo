import styled from '@emotion/styled';
import Palette from '@styles/Palette';
import Grid from '../Grid';

export const FooterWrapper = styled.footer`
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 92px;
    background-color: ${Palette.LIGHT_GREY};
`;

export const FooterContent = styled(Grid)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 92px;
`;
