import { Card, Container, Stack, Text } from '../components';

export default {
    title: 'Layout/Container',
    component: Container
};

export const Normal = () => (
    <Container>
        <Card>
            <Stack>
                <Text>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem.
                </Text>
            </Stack>
        </Card>
    </Container>
);
