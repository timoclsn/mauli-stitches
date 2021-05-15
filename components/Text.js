import { leadingTrim } from 'leading-trim';

import {
    createVariants,
    leadingTrimRef,
    styled,
    theme
} from '../stitches.config';

const size = createVariants(theme.fontSizes, (value) => ({
    fontSize: `$${value}`
}));

const leading = createVariants(theme.lineHeights, (value) => ({
    ...leadingTrim({
        lineHeight: theme.lineHeights[value].value,
        reference: leadingTrimRef
    })
}));

const Text = styled('span', {
    variants: {
        variant: {
            normal: {
                color: 'inherit'
            },
            highlight: {
                color: '$highlight'
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

export default Text;
