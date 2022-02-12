import React, { Suspense, ReactElement } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';

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
            <Suspense fallback={pendingFallback}>{children}</Suspense>
        </ErrorBoundary>
    );
}

AsyncBoundary.propTypes = {
    pendingFallback: PropTypes.node.isRequired,
    rejectedFallback: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default AsyncBoundary;
