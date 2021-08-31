import { gray, indigo } from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const stitchesConfig = createStitches({
    theme: {
        colors: {
            ...gray,
            ...indigo
        },
        fonts: {
            sans: 'Inter, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
        },
        fontSizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem'
        },
        lineHeights: {
            xs: '1',
            sm: '1.25',
            md: '1.5',
            lg: '1.75',
            xl: '2',
            '2xl': '2.25',
            '3xl': '2.5',
            '4xl': '2.75',
            '5xl': '3'
        },
        fontWeights: {
            normal: 400,
            bold: 700
        },
        space: {
            none: 'none',
            xs: '0.25rem',
            sm: '0.5rem',
            md: '1rem',
            lg: '1.5rem',
            xl: '2rem',
            '2xl': '4rem',
            '3xl': '8rem'
        },
        sizes: {
            none: 'none',
            xs: '0.25rem',
            sm: '0.5rem',
            md: '1rem',
            lg: '1.5rem',
            xl: '2rem',
            '2xl': '4rem',
            '3xl': '8rem'
        },
        radii: {
            xs: '0.25rem',
            sm: '0.5rem',
            md: '1rem',
            lg: '1.5rem',
            xl: '2rem',
            '2xl': '4rem',
            '3xl': '8rem',
            round: '9999px'
        }
    },
    media: {
        sm: '(min-width: 600px)',
        md: '(min-width: 900px)',
        lg: '(min-width: 1200px)'
    },
    utils: {
        m: (value: Stitches.ScaleValue<'space'>) => ({
            marginTop: value,
            marginBottom: value,
            marginLeft: value,
            marginRight: value
        }),
        mt: (value: Stitches.ScaleValue<'space'>) => ({
            marginTop: value
        }),
        mr: (value: Stitches.ScaleValue<'space'>) => ({
            marginRight: value
        }),
        mb: (value: Stitches.ScaleValue<'space'>) => ({
            marginBottom: value
        }),
        ml: (value: Stitches.ScaleValue<'space'>) => ({
            marginLeft: value
        }),
        mx: (value: Stitches.ScaleValue<'space'> | 'auto') => ({
            marginLeft: value,
            marginRight: value
        }),
        my: (value: Stitches.ScaleValue<'space'>) => ({
            marginTop: value,
            marginBottom: value
        }),
        p: (value: Stitches.ScaleValue<'space'>) => ({
            paddingTop: value,
            paddingBottom: value,
            paddingLeft: value,
            paddingRight: value
        }),
        pt: (value: Stitches.ScaleValue<'space'>) => ({
            paddingTop: value
        }),
        pr: (value: Stitches.ScaleValue<'space'>) => ({
            paddingRight: value
        }),
        pb: (value: Stitches.ScaleValue<'space'>) => ({
            paddingBottom: value
        }),
        pl: (value: Stitches.ScaleValue<'space'>) => ({
            paddingLeft: value
        }),
        px: (value: Stitches.ScaleValue<'space'>) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value: Stitches.ScaleValue<'space'>) => ({
            paddingTop: value,
            paddingBottom: value
        }),
        size: (value: Stitches.ScaleValue<'size'>) => ({
            width: value,
            height: value
        })
    }
});

export const { styled, css, globalCss, keyframes, theme, getCssText, config } =
    stitchesConfig;

export const globalStyles = globalCss({
    // Reset
    'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
        {
            margin: '0',
            padding: '0',
            border: '0',
            fontSize: '100%',
            font: 'inherit',
            verticalAlign: 'baseline'
        },
    'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section':
        {
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
    '*, *::before, *::after': { boxSizing: 'border-box' },

    '@font-face': {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '100 900',
        fontDisplay: 'optional',
        src: 'url(/fonts/inter-var-latin.woff2) format("woff2")'
    },
    html: {
        fontFamily: '$sans'
    }
});

// Leading trim:
// This has to be adapted for different custom fonts
// This  is for "Inter"
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

type CSS = Stitches.CSS<typeof stitchesConfig>;

export function createVariants<T extends string>(scale: any, variant: any) {
    return Object.keys(scale).reduce(
        (acc, value) => ({
            ...acc,
            [value]: variant(value)
        }),
        {}
    ) as { [key in T]: CSS };
}

export function bpValue(bp: string) {
    return bp.split(' ')[1]?.slice(0, -1) || '0px';
}
