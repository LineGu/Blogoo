import React, { ReactElement } from 'react';
import * as S from './Grid.style';

function Grid({ children, className }: IParentComponentProps): ReactElement {
    return (
        <S.Wrapper data-testid="grid" className={className}>
            {children}
        </S.Wrapper>
    );
}

export default Grid;
