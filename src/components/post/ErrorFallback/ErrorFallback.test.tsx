import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ErrorFallback from '@components/post/ErrorFallback';
import { ASSETS } from './ErrorFallback';

const mockError = new Error('some error');

describe('Grid Component', () => {
    const mockReset = jest.fn();

    it('에러가 발생했을 때 원하는 텍스트가 잘 나오는지 확인', () => {
        const utils = render(<ErrorFallback error={mockError} reset={mockReset} />);

        expect(utils.getByText(ASSETS.ERROR_TEXT)).toBeInTheDocument();
    });

    it('에러 객체가 있을 때, 메세지가 잘 나오는지 확인', () => {
        const utils = render(<ErrorFallback error={mockError} reset={mockReset} />);

        expect(utils.getByText(mockError.message)).toBeInTheDocument();
    });

    it('reset 버튼을 눌렀을 때, Reset 함수가 실행이 되나 확인', () => {
        const utils = render(<ErrorFallback error={mockError} reset={mockReset} />);
        fireEvent.click(utils.getByText(ASSETS.ERROR_TEXT));

        expect(mockReset).toHaveBeenCalledTimes(1);
    });
});
