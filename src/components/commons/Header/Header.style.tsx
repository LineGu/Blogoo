import styled from '@emotion/styled';
import CustomLink from '../CustomLink';

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 4rem;
`;

export const BlogTitle = styled(CustomLink)`
    font-family: 'Pretendard-ExtraBold';
    font-size: 1.2rem;
    font-weight: 800;
    color: black;
`;
