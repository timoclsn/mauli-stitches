import { getCssString } from '../stitches.config';

function MyApp({ Component, pageProps }) {
    getCssString();

    return <Component {...pageProps} />;
}

export default MyApp;
