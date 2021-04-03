import Document, { Head, Html, Main, NextScript } from 'next/document';

import { getCssString } from '../stitches.config';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <style
                        id="stitches"
                        dangerouslySetInnerHTML={{ __html: getCssString() }}
                    />
                    <link
                        rel="preload"
                        href="/fonts/inter-var-latin.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <title>Mauli Design System</title>
                    <meta
                        name="description"
                        content="Mauli Design System Playground"
                        key="description"
                    />
                    <link
                        rel="canonical"
                        href="https://mauli.timoclasen.de"
                        key="canonical"
                    />

                    <meta property="og:type" content="website" key="og:type" />
                    <meta
                        property="og:site_name"
                        content="Mauli Design System"
                        key="og:site_name"
                    />
                    <meta property="og:locale" content="de" key="og:locale" />
                    <meta
                        property="og:url"
                        content="https://mauli.timoclasen.de"
                        key="og:url"
                    />
                    <meta
                        property="og:title"
                        content="Mauli Design System"
                        key="og:title"
                    />
                    <meta
                        property="og:description"
                        content="Mauli Design System Playground"
                        key="og:description"
                    />
                    <meta
                        name="twitter:card"
                        content="summary_large_image"
                        key="twitter:card"
                    />
                    <meta
                        name="twitter:title"
                        content="Mauli Design System"
                        key="twitter:title"
                    />
                    <meta
                        name="twitter:description"
                        content="Mauli Design System Playground"
                        key="twitter:description"
                    />
                    <meta
                        name="twitter:site"
                        content="@timoclsn"
                        key="twitter:site"
                    />
                    <meta
                        name="twitter:creator"
                        content="@timoclsn"
                        key="twitter:creator"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
