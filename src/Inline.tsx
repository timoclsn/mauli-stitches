import { Stack } from './Stack';
import { styled } from './stitches.config';

export const Inline = styled(Stack, {
  defaultVariants: {
    direction: 'horizontal',
    space: 'sm',
    wrap: 'true',
  },
});
