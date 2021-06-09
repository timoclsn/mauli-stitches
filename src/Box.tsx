import { createVariants, styled, theme } from './stitches.config';

type TSizes = keyof typeof theme.sizes;

const inset = createVariants<TSizes>(
    theme.sizes,
    (value: keyof typeof theme.sizes) => ({
        p: `$${value}`
    })
);

export const Box = styled('div', {
    variants: {
        inset: {
            none: {
                p: 'none'
            },
            ...inset
        }
    },

    defaultVariants: {
        inset: 'none'
    }
});
