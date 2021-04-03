import Box from '../components/Box';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Stack from '../components/Stack';
import Text from '../components/Text';

export default function Home() {
    return (
        <Container size="large">
            <Box
                inset={{
                    '@initial': 'small',
                    '@bp1': 'large'
                }}>
                <Stack>
                    <Heading as="h1" size="large">
                        Mauli Design System
                    </Heading>
                    <Text as="p" variant="highlight">
                        [WIP] Design System
                    </Text>
                </Stack>
            </Box>
            <Box inset="large">
                <Stack
                    direction={{
                        '@initial': 'vertical',
                        '@bp1': 'horizontal'
                    }}>
                    <Card>
                        <Stack>
                            <Heading as="h2" size="large">
                                Heading Large
                            </Heading>
                            <Heading as="h2" size="medium">
                                Heading Medium
                            </Heading>
                            <Heading as="h2" size="small">
                                Heading Small
                            </Heading>
                        </Stack>
                    </Card>
                    <Card>
                        <Stack>
                            <Text as="p" size="large">
                                Text Large
                            </Text>
                            <Text as="p" size="medium">
                                Text Medium
                            </Text>
                            <Text as="p" size="small">
                                Text Small
                            </Text>
                        </Stack>
                    </Card>
                </Stack>
            </Box>
        </Container>
    );
}
