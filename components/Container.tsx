import { bpValue, config, createVariants, styled } from '../stitches.config';

type TMedia = 'initial' | 'sm' | 'md' | 'lg';

const size = createVariants<TMedia>(
    config.media,
    (value: keyof typeof config.media) => ({
        maxWidth: bpValue(config.media[value])
    })
);

export const Container = styled('div', {
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
