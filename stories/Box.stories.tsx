import { Box, Button } from '../components';

export default {
    title: 'Box',
    component: Box
};

export const Inset = () => (
    <Box inset="md">
        <Button>Button</Button>
    </Box>
);
