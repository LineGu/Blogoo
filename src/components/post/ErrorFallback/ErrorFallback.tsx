import React from 'react';

interface IProps {
    error: Nullable<Error>;
    reset: () => void;
}

export const ASSETS = {
    ERROR_TEXT: '에러가 발생했습니다. 다시 시도하려면 이 텍스트를 클릭하세요.',
};

function ErrorFallback({ error, reset }: IProps) {
    // TODO 에러 핸들에 관련된 로직 추가. 추구 변경 필요
    return (
        <section>
            {error?.message}
            <br />
            <button aria-label="Reset Error" onClick={reset}>
                {ASSETS.ERROR_TEXT}
            </button>
        </section>
    );
}

export default ErrorFallback;
