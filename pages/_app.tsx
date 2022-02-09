import React from 'react';
import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import GlobalStyle from 'styles/global_style';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Global styles={GlobalStyle} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
