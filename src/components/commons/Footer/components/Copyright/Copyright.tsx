import Palette from '@styles/Palette';
import React, { ReactChild, ReactElement } from 'react';
import * as S from './Copyright.styles';

export type FontWeightType = 'thin' | 'regular' | 'bold' | 'extraBold';

export interface IDecorate {
    textColor?: string;
    fontWeight?: FontWeightType;
    fontSize?: number;
    underline?: boolean;
}

interface IItemProps {
    decorate?: IDecorate;
    content: ReactChild;
}

const defaultDecorate: NonNullableObj<IDecorate> = {
    textColor: Palette.BLACK,
    fontWeight: 'bold',
    fontSize: 12,
    underline: false,
};

function List({ children, className }: IParentComponentProps): ReactElement {
    return <S.List className={className}>{children}</S.List>;
}

function Item({ content, decorate }: IItemProps): ReactElement {
    return <S.Item decorate={{ ...defaultDecorate, ...decorate }}>{content}</S.Item>;
}

export default { List, Item };
