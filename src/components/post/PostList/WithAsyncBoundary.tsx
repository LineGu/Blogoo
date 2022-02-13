import React from 'react';
import AsyncBoundary from '@components/commons/AsyncBoundary';
import Skeleton from '../Skeleton';
import PostList from './PostList';
import ErrorFallback from '../ErrorFallback';

/* 
    getServerSideProps를 사용하여 데이터를 받아오므로, 사실상 pending이 될 리는 없다.
    추후에 혹시, getServerSideProps를 제거하고 클라이언트에서 패칭을 다룬다면 Skeleton 사용.
*/
function WithErrorBoundary() {
    return (
        <AsyncBoundary
            renderRejectedFallback={({ error, reset }) => (
                <ErrorFallback error={error} reset={reset} />
            )}
            pendingFallback={<Skeleton />}
        >
            <PostList />
        </AsyncBoundary>
    );
}

export default WithErrorBoundary;
