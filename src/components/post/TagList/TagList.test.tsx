import React from 'react';
import { render } from '@testing-library/react';
import TagList from '@components/post/TagList';

const mockTagList: string[] = new Array(10).fill(0);

mockTagList.forEach((_, idx) => (mockTagList[idx] = String(idx)));

describe('Grid Component', () => {
    it('태그리스트들에 대해서 모두 잘 나오나 확인', () => {
        const utils = render(<TagList tagList={mockTagList} />);

        mockTagList.forEach((tag) => {
            expect(utils.getByText(tag)).toBeInTheDocument();
        });
    });
});
