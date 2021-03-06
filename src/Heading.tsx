import { styled } from './stitches.config';
import { Text } from './Text';

export const Heading = styled(Text, {
  defaultVariants: {
    weight: 'bold',
    size: '5xl',
    leading: 'xs',
  },
});
