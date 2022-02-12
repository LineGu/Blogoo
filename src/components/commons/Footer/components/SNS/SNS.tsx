import React, { ReactChild, ReactElement } from 'react';
import Image from 'next/image';
import * as S from './SNS.styles';

type ItemProps = {
    href: string;
    src: string;
    alt: string;
};

const ITEM_SIZE = {
    width: 20,
    height: 20,
};

function List({ children }: IParentComponentProps): ReactElement {
    return <S.List>{children}</S.List>;
}

function Item({ href, src, alt }: ItemProps): ReactElement {
    return (
        <a href={href}>
            <Image src={src} alt={alt} width={ITEM_SIZE.width} height={ITEM_SIZE.height} />
        </a>
    );
}

export default { List, Item };
