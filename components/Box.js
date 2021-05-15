import { createVariants, styled, theme } from '../stitches.config';

const inset = createVariants(theme.sizes, (value) => ({
    p: `$${value}`
}));

const Box = styled('div', {
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

export default Box;
