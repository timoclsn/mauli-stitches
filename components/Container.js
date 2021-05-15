import { config, styled } from '../stitches.config';

const size = Object.keys(config.media).reduce(
    (acc, value) => ({
        none: {
            maxWidth: 'none'
        },
        ...acc,
        [value]: {
            maxWidth: `@${value}`
        }
    }),
    {}
);

const Container = styled('div', {
    mx: 'auto',
    px: '$md',

    variants: {
        size
    },

    defaultVariants: {
        size: 'xl'
    }
});

export default Container;
