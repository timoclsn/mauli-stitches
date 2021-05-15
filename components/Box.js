import { styled, theme } from '../stitches.config';

const inset = Object.keys(theme.sizes).reduce(
    (acc, value) => ({
        none: {
            p: 'none'
        },
        ...acc,
        [value]: {
            p: `$${value}`
        }
    }),
    {}
);

const Box = styled('div', {
    variants: {
        inset
    },

    defaultVariants: {
        inset: 'none'
    }
});

export default Box;
