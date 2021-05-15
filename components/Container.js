import { bpValue, config, createVariants, styled } from '../stitches.config';

const size = createVariants(config.media, (value) => ({
    maxWidth: bpValue(config.media[value])
}));

console.log(size);

const Container = styled('div', {
    mx: 'auto',
    px: '$md',

    variants: {
        size: {
            none: {
                maxWidth: 'none'
            },
            ...size
        }
    },

    defaultVariants: {
        size: 'lg'
    }
});

export default Container;
