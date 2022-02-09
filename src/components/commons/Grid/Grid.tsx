import React, { ReactElement } from 'react';
import * as S from './Grid.style';

interface Props {
    children: ReactElement | ReactElement[]; // 질문 react child, react children 등
}

function Grid({ children }: Props): ReactElement {
    return <S.Wrapper>{children}</S.Wrapper>;
}

export default Grid;
