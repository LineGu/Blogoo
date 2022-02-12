import React from 'react';
import { render } from '@testing-library/react';
import { RejectedFallbackFuncType } from '../AsyncBoundary/AsyncBoundary';
import AsyncBoundary from './AsyncBoundary';

const FullFilledCompnent = () => {
    return <div data-testid="fullfilledUI">정상적인 UI</div>;
};

const RejectedComponent = () => {
    throw new Error('Test');
};

const PendingComponent = () => {
    throw new Promise((res) => setTimeout(res, 1000));
};

const PendingFallback = () => {
    return <div data-testid="pendingFallback">로딩중</div>;
};

const ErrorFallback = () => {
    return <div data-testid="errorFallback">에러 Fallback UI</div>;
};

const renderErrorFallback: RejectedFallbackFuncType = ({ error, reset }) => <ErrorFallback />;

describe('Error Boundary', () => {
    it('에러 상황 시 Error Fallback UI가 잘 나오나 확인', () => {
        const errorObject = console.error;
        console.error = jest.fn();
        const utils = render(
            <AsyncBoundary
                pendingFallback={<PendingFallback />}
                renderRejectedFallback={renderErrorFallback}
            >
                <RejectedComponent />
            </AsyncBoundary>,
        );

        expect(utils.getByTestId('errorFallback')).toBeVisible();
        console.error = errorObject;
    });

    it('Pending 상황 시 Pending Fallback UI가 잘 나오나 확인', () => {
        const utils = render(
            <AsyncBoundary
                pendingFallback={<PendingFallback />}
                renderRejectedFallback={renderErrorFallback}
            >
                <PendingComponent />
            </AsyncBoundary>,
        );

        expect(utils.getByTestId('pendingFallback')).toBeVisible();
    });

    it('Fullfill 상황 시 Fullfill UI가 잘 나오나 확인', () => {
        const utils = render(
            <AsyncBoundary
                pendingFallback={<PendingFallback />}
                renderRejectedFallback={renderErrorFallback}
            >
                <FullFilledCompnent />
            </AsyncBoundary>,
        );

        expect(utils.getByTestId('fullfilledUI')).toBeVisible();
    });
});
