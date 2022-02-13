import React from 'react';
import Link from 'next/link';
import * as S from './CustomLink.style';

interface IProps extends IParentComponentProps {
    href: string;
}

function CustomLink({ href, children, className }: IProps) {
    return (
        <Link href={href} passHref>
            <S.AnchorTag className={className}>{children}</S.AnchorTag>
        </Link>
    );
}

export default CustomLink;
