import React from 'react';
import CustomHead from '@components/commons/Head';
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import Grid from '../Grid';

const Template = ({ children }: IParentComponentProps) => {
    return (
        <>
            <CustomHead />
            <Header />
            <Grid>
                <main>{children}</main>
            </Grid>
            <Footer />
        </>
    );
};

export default Template;
