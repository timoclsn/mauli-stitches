import { styled } from '../stitches.config';
import Box from './Box';

const Card = styled(Box, {
    borderRadius: '$lg',

    variants: {
        variant: {
            normal: {
                color: '$hiContrast',
                backgroundColor: 'rgba(0,0,0,0.1)' // TODO: Use color
            },
            highlight: {
                color: '$white',
                backgroundColor: '$highlight'
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
