import styled from '@emotion/styled';
import BP from '@styles/break_point';

export const Wrapper = styled.div`
    width: 700px;
    margin: 0 auto;
    padding: 0 1rem;

    ${BP.TABLET_DOWN} {
        width: 100vw;
        padding: 0.5rem 1.25rem;
    }
`;
