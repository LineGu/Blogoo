import React from 'react';
import { render } from '@testing-library/react';
import { RejectedFallbackFuncType } from '../AsyncBoundary/AsyncBoundary';
import ErrorBoundary from './ErrorBoundary';

const FullFilledCompnent = () => {
    return <div data-testid="fullfilledUI">정상적인 UI</div>;
};
const RejectedComponent = () => {
    throw new Error('Test');
};

const ErrorFallback = () => {
    return <div data-testid="errorFallback">에러 Fallback UI</div>;
};

const renderErrorFallback: RejectedFallbackFuncType = ({ error, reset }) => <ErrorFallback />;

describe('Error Boundary', () => {
    it('에러 상황 시 에러 Fallback UI가 잘 나오나 확인', () => {
        const errorObject = console.error;
        console.error = jest.fn();
        const utils = render(
            <ErrorBoundary renderFallback={renderErrorFallback}>
                <RejectedComponent />
            </ErrorBoundary>,
        );

        expect(utils.getByTestId('errorFallback')).toBeVisible();
        console.error = errorObject;
    });

    it('에러가 발생하지 않을 경우 일반 컴포넌가 잘 나오나 확인', () => {
        const utils = render(
            <ErrorBoundary renderFallback={renderErrorFallback}>
                <FullFilledCompnent />
            </ErrorBoundary>,
        );

        expect(utils.getByTestId('fullfilledUI')).toBeVisible();
    });
});
