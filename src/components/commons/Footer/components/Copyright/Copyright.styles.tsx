import styled from '@emotion/styled';
import { IDecorate, FontWeightType } from './Copyright';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
`;

const thin = `
  font-family: Pretendard-Light, sans-serif;
`;

const regular = `
  font-family: Pretendard-Regular, sans-serif;
`;

const bold = `
  font-family: Pretendard-Bold, sans-serif;
`;

const extraBold = `
  font-family: Pretendard-ExtraBold, sans-serif;
`;

const fontWeightMap: { [K in FontWeightType]: string } = {
    thin,
    regular,
    bold,
    extraBold,
};

export const Item = styled.li<{ decorate: NonNullableObj<IDecorate> }>`
    ${(props) => {
        const {
            decorate: { textColor, fontSize, fontWeight, underline },
        } = props;

        return `
            color: ${textColor};
            ${fontWeightMap[fontWeight]};
            font-size: ${fontSize}px;
            text-decoration: ${underline ? 'underline' : 'none'};
            line-height: 16px;
            margin-bottom: 2px;
        `;
    }}
`;
