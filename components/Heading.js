import { styled } from '../stitches.config';
import Text from './Text';

const Heading = styled(Text, {
    defaultVariants: {
        weight: 'bold',
        size: '5xl'
    }
});

export default Heading;
