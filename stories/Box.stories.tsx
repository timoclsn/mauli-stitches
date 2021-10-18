import { Box, Button } from '../src';

export default {
  title: 'Layout/Box',
  component: Box,
};

export const Inset = () => (
  <Box inset="md">
    <Button>Button</Button>
  </Box>
);
