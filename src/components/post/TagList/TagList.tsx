import React from 'react';
import * as S from './TagList.style';

interface IProps {
    tagList: string[];
}

function TagList({ tagList }: IProps) {
    return (
        <S.TagWrapper>
            {tagList.map((tag) => (
                <S.Tag key={tag}>{tag}</S.Tag>
            ))}
        </S.TagWrapper>
    );
}

export default TagList;
