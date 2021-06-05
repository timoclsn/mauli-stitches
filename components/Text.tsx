import { leadingTrim } from 'leading-trim';

import {
    createVariants,
    leadingTrimRef,
    styled,
    theme
} from '../stitches.config';

type TFontSizes = keyof typeof theme.fontSizes;

const size = createVariants<TFontSizes>(
    theme.fontSizes,
    (value: keyof typeof theme.fontSizes) => ({
        fontSize: `$${value}`
    })
);

const leading = createVariants(
    theme.lineHeights,
    (value: keyof typeof theme.lineHeights) => ({
        ...leadingTrim({
            lineHeight: parseFloat(theme.lineHeights[value].value),
            reference: leadingTrimRef
        })
    })
);

export const Text = styled('span', {
    variants: {
        variant: {
            normal: {
                color: 'inherit'
            },
            highlight: {
                color: '$indigo9'
            }
        },

        weight: {
            normal: {
                fontWeight: '$normal'
            },
            bold: {
                fontWeight: '$bold'
            }
        },

        size,

        leading,

        align: {
            left: {
                textAlign: 'left'
            },
            center: {
                textAlign: 'center'
            },
            right: {
                textAlign: 'right'
            }
        }
    },

    defaultVariants: {
        variant: 'normal',
        weight: 'normal',
        size: 'md',
        leading: 'md',
        align: 'left'
    }
});
