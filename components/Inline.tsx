import { styled } from '../stitches.config';
import Stack from './Stack';

const Inline = styled(Stack, {
    defaultVariants: {
        direction: 'horizontal',
        space: 'sm',
        wrap: 'true'
    }
});

export default Inline;
