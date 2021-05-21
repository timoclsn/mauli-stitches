import { styled } from '../stitches.config';
import Box from './Box';

const Card = styled(Box, {
    borderRadius: '$lg',

    variants: {
        variant: {
            normal: {
                color: '$gray1000',
                backgroundColor: '$gray300'
            },
            highlight: {
                color: '$indigo100',
                backgroundColor: '$indigo800'
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
        // @ts-ignore
        inset: 'xl' // TS Does not work when Card has own varaints. Possible Stitches Bug (https://github.com/modulz/stitches/issues/530)
    }
});

export default Card;
