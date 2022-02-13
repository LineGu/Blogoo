import styled from '@emotion/styled';
import Palette from '@styles/Palette';

export const TagWrapper = styled.ul`
    display: flex;

    & > * {
        margin-right: 6px;
    }
`;

export const Tag = styled.li`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    color: ${Palette.BLACK};
    padding: 3px 8px 5px;
    border-radius: 6px;
    background-color: ${Palette.YELLOW};
`;
