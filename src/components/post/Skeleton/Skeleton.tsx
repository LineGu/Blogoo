import React from 'react';
import * as S from './Skeleton.style';

const postListForSkeleton = new Array(6).fill(0);

function Skeleton() {
    return (
        <>
            {postListForSkeleton.map((_, idx) => (
                <S.SkeletonItem key={idx} />
            ))}
        </>
    );
}

export default Skeleton;
