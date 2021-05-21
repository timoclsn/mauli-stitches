import { bpValue, config, createVariants, styled } from '../stitches.config';

type TMedia = 'initial' | 'sm' | 'md' | 'lg';

const size = createVariants<TMedia>(config.media, (value) => ({
    maxWidth: bpValue(config.media[value])
}));

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
