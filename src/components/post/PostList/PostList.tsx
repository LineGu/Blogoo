import React from 'react';
import { useQuery } from 'react-query';
import { getPostList } from '@apis/post';
import PostItem from '../PostItem';
import * as S from './PostList.style';

function PostList() {
    const { data } = useQuery<{ post: IPostDataDTO[] }>(['posts'], getPostList, {
        suspense: true,
        staleTime: Infinity,
    });

    const getItemProps = ({ id, title, subTitle, tags }: IPostDataDTO) => {
        return { id, title, subTitle, tags };
    };

    return (
        <article>
            <S.Wrapper role="tabpanel" aria-label="post-list">
                {data?.post.map((postData) => (
                    <PostItem {...getItemProps(postData)} key={postData.id} />
                ))}
            </S.Wrapper>
        </article>
    );
}

export default PostList;
