import { styled } from '../stitches.config';
import { Stack } from './Stack';

export const Inline = styled(Stack, {
    defaultVariants: {
        direction: 'horizontal',
        space: 'sm',
        wrap: 'true'
    }
});
