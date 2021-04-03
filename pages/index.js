import Head from 'next/head';

import Box from '../components/Box';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Stack from '../components/Stack';
import Text from '../components/Text';

export default function Home() {
    return (
        <>
            <Head>
                <title>Mauli Design System</title>
                <meta
                    name="description"
                    content="Mauli Design System Playground"
                    key="description"
                />
                <link
                    rel="canonical"
                    href="https://mauli.timoclasen.de"
                    key="canonical"
                />

                <meta property="og:type" content="website" key="og:type" />
                <meta
                    property="og:site_name"
                    content="Mauli Design System"
                    key="og:site_name"
                />
                <meta property="og:locale" content="de" key="og:locale" />
                <meta
                    property="og:url"
                    content="https://mauli.timoclasen.de"
                    key="og:url"
                />
                <meta
                    property="og:title"
                    content="Mauli Design System"
                    key="og:title"
                />
                <meta
                    property="og:description"
                    content="Mauli Design System Playground"
                    key="og:description"
                />
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                    key="twitter:card"
                />
                <meta
                    name="twitter:title"
                    content="Mauli Design System"
                    key="twitter:title"
                />
                <meta
                    name="twitter:description"
                    content="Mauli Design System Playground"
                    key="twitter:description"
                />
                <meta
                    name="twitter:site"
                    content="@timoclsn"
                    key="twitter:site"
                />
                <meta
                    name="twitter:creator"
                    content="@timoclsn"
                    key="twitter:creator"
                />
            </Head>
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
                            [WIP] Design System Playground
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
                                <Button>Button</Button>
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
                                <Button variant="ghost">Ghost Button</Button>
                            </Stack>
                        </Card>
                    </Stack>
                </Box>
            </Container>
        </>
    );
}
