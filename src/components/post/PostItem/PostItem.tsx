import React from 'react';
import * as S from './PostItem.style';
import TagList from '../TagList';
import CustomLink from '@components/commons/CustomLink';

interface IProps {
    id: string;
    title: string;
    subTitle?: string;
    tags: string[];
}

function PostItem({ id, title, subTitle, tags }: IProps) {
    return (
        <S.Wrapper>
            <CustomLink href={`/post/${id}`}>
                <S.Content>
                    <S.Title>{title}</S.Title>
                    {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
                    <TagList tagList={tags} />
                </S.Content>
            </CustomLink>
        </S.Wrapper>
    );
}

export default PostItem;
