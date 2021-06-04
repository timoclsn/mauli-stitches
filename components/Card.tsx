import { styled } from '../stitches.config';
import { Box } from './Box';

export const Card = styled(Box, {
    borderRadius: '$lg',

    variants: {
        variant: {
            normal: {
                color: '$gray12',
                backgroundColor: '$gray4'
            },
            highlight: {
                color: '$indigo2',
                backgroundColor: '$indigo9'
            }
        },

        fullWidth: {
            true: {
                width: '100%'
            }
        }
    },

    defaultVariants: {
        variant: 'normal',
        // @ts-expect-error: TS Does not work when Card has own varaints. Possible Stitches Bug (https://github.com/modulz/stitches/issues/530)
        inset: 'xl'
    }
});
