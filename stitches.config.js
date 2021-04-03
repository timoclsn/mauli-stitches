import { createCss } from '@stitches/react';

export const { styled, getCssString, theme, global } = createCss({
    theme: {
        colors: {
            white: 'white',
            black: 'black',
            purple: '#3E51F7',

            // Semantic
            loContrast: '$white',
            hiContrast: '$black',
            highlight: '$purple'
        },
        fonts: {
            sans: 'Inter, sans-serif'
        },
        fontSizes: {
            1: '12px',
            2: '14px',
            3: '16px',
            4: '20px',
            5: '24px',
            6: '32px',
            7: '48px',
            8: '64px',
            9: '72px'
        },
        fontWeights: {
            normal: 400,
            bold: 700
        },
        space: {
            1: '2px',
            2: '4px',
            3: '8px',
            4: '16px',
            5: '32px',
            6: '64px',
            7: '128px',
            8: '256px',
            9: '512px'
        },
        sizes: {
            1: '2px',
            2: '4px',
            3: '8px',
            4: '16px',
            5: '32px',
            6: '64px',
            7: '128px',
            8: '256px',
            9: '512px'
        },
        lineHeights: {
            1: '18px',
            2: '21px',
            3: '24px',
            4: '30px',
            5: '36px',
            6: '48px',
            7: '72px',
            8: '96px',
            9: '108px'
        },
        radii: {
            1: '2px',
            2: '4px',
            3: '8px',
            4: '16px',
            5: '32px',
            round: '9999px'
        }
    },
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
        bp4: '(min-width: 1280px)'
    }
});

export const darkTheme = theme('dark', {
    colors: {
        white: 'white',
        black: 'black',
        purple: '#4F5FEF',

        // Semantic
        loContrast: '$black',
        hiContrast: '$white',
        highlight: '$purple'
    }
});

export const globalStyles = global({
    // Reset
    'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
        margin: '0',
        padding: '0',
        border: '0',
        fontSize: '100%',
        font: 'inherit',
        verticalAlign: 'baseline'
    },
    'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section': {
        display: 'block'
    },
    '*[hidden]': {
        display: 'none'
    },
    body: {
        lineHeight: '1'
    },
    'ol, ul': {
        listStyle: 'none'
    },
    'blockquote, q': {
        quotes: 'none'
    },
    'blockquote:before, blockquote:after, q:before, q:after': {
        content: 'none'
    },
    table: {
        borderSpacing: '0'
    },

    // Custom
    '@font-face': {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '100 900',
        fontDisplay: 'optional',
        src: 'url(/fonts/inter-var-latin.woff2) format("woff2")'
    },
    html: {
        fontFamily: 'Inter'
    }
});

// Leading trim:
// This has to be adapted for different custom fonts
// This config is for "Inter"
// https://github.com/rudeayelo/leading-trim
// http://text-crop.eightshapes.com
// https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62
// https://medium.com/microsoft-design/leading-trim-the-future-of-digital-typesetting-d082d84b202
export const leadingTrimRef = {
    fontSize: 40,
    lineHeight: 1,
    topCrop: 5,
    bottomCrop: 6
};
