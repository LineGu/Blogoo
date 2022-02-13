import React from 'react';
import { render } from '@testing-library/react';
import PostItem from '@components/post/PostItem';
import { mockPostDatas } from '@constants/Mocks';

describe('Grid Component', () => {
    it('제목이 잘 나오나 확인', () => {
        const mockData = mockPostDatas[0];
        const { title } = mockData;
        const utils = render(<PostItem {...mockData} />);

        expect(utils.getByText(title)).toBeInTheDocument();
    });

    it('부제목이 있다면 잘 나오나 확인', () => {
        const mockData = mockPostDatas[0];
        const { subTitle } = mockData;
        const utils = render(<PostItem {...mockData} />);

        if (subTitle) expect(utils.getByText(subTitle)).toBeInTheDocument();
    });

    it('태그리스트들에 대해서 모두 잘 나오나 확인', () => {
        const mockData = mockPostDatas[0];
        const { tags } = mockData;
        const utils = render(<PostItem {...mockData} />);

        tags.forEach((tag) => {
            expect(utils.getByText(tag)).toBeInTheDocument();
        });
    });
});
