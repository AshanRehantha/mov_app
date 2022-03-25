import Head from 'next/head';
import React from 'react';

const Layout = ({title, keyword, discription, children}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='discription' content={discription} />
            </Head>
            {children}
        </div>
    );
}

Layout.defaultProps = {
    title: 'Movie App',
    discription: "This is Movie App",
    keyword:"music, films, edm, events"
}

export default Layout;
