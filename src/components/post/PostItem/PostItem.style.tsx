import styled from '@emotion/styled';
import Palette from '@styles/Palette';

export const Wrapper = styled.li`
    margin-bottom: 8px;
    border-radius: 4px;
    padding: 24px 20px 24px 20px;
    cursor: pointer;
    transform: translateX(-24px);
    width: calc(100% + 40px);
    max-height: 180px;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.08);
    }
`;

export const Content = styled.section``;

export const Title = styled.h1`
    font-size: 24px;
    font-family: Pretendard-Bold, sans-serif;
    color: ${Palette.BLACK};
    margin-bottom: 4px;
    line-height: 32px;
`;

export const SubTitle = styled.h2`
    font-size: 15px;
    font-family: Pretendard-Light, sans-serif;
    color: ${Palette.GREY};
    margin-bottom: 20px;
    line-height: 24px;
`;
