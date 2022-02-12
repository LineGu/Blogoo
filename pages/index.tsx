import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';

const Home: NextPage = () => {
    return (
        <div className={''}>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, height=device-height, user-scalable=no, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="theme-color" content="#1A181E" />
                <meta name="description" content="Goo's develop blog" />
                <meta property="og:url" content="https://googoo.blog" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Goo의 개발 블로그" />
                <meta property="og:image" content="https://swoomi.me/publick/favicon.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:description" content="Goo의 개발 블로그 구경하세요." />
                <meta name="author" content="" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="기술 블로그, 프론트엔드, 자바스크립트, 리액트, 타입스크립트, 백엔드, 인프라, 네트워크, CS"
                />

                <meta name="twitter:card" content="Goo의 개발 블로그" />
                <meta name="twitter:title" content="Goo의 개발 블로그" />
                <meta name="twitter:description" content="Goo의 개발 블로그 구경하세요." />

                <link rel="shortcut icon" href="/favicon.png" />
                <link rel="mask-icon" href="/favicon.png" color="#1A181E" />
                <link rel="apple-touch-icon-precomposed" href="/favicon.png" />
                <title>Goo's Blog</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <Footer />
        </div>
    );
};

export default Home;
