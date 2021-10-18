import { Button, Stack } from '../src';

export default {
  title: 'Layout/Stack',
  component: Stack,
};

export const Vertical = () => (
  <Stack>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </Stack>
);

export const Horizontal = () => (
  <Stack direction="horizontal">
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </Stack>
);
