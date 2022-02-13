import type { NextPage } from 'next';
import React from 'react';
import Template from '@components/commons/Template';
import { dehydrate, QueryClient } from 'react-query';
import PostList from '@components/post/PostList';
import { getPostList } from 'src/apis/post';

const Home: NextPage = () => {
    return (
        <Template>
            <PostList />
        </Template>
    );
};

export async function getServerSideProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['posts'], getPostList);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export default Home;
