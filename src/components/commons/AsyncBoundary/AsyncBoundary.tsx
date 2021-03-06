import React, { Suspense, ReactElement } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import SSRSafeSuspense from '../SSRSafeSuspense';

export type RejectedFallbackFuncType = ({
    error,
    reset,
}: {
    error: Nullable<Error>;
    reset: () => void;
}) => ReactElement;

interface IProps extends IParentComponentProps {
    pendingFallback: ReactElement;
    renderRejectedFallback: RejectedFallbackFuncType;
    [x: string]: unknown;
}

function AsyncBoundary({
    pendingFallback,
    renderRejectedFallback,
    children,
    ...errorBoundaryOhterProps
}: IProps) {
    return (
        <ErrorBoundary renderFallback={renderRejectedFallback} {...errorBoundaryOhterProps}>
            <SSRSafeSuspense fallback={pendingFallback}>{children}</SSRSafeSuspense>
        </ErrorBoundary>
    );
}

export default AsyncBoundary;
