import { Box, Button } from '../components';

export default {
    title: 'Layout/Box',
    component: Box
};

export const Inset = () => (
    <Box inset="md">
        <Button>Button</Button>
    </Box>
);
