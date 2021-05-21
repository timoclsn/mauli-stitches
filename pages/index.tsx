import Head from 'next/head';
import { ArrowRight } from 'react-feather';

import Box from '../components/Box';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Inline from '../components/Inline';
import Label from '../components/Label';
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

            <Container>
                <Box
                    inset={{
                        '@initial': 'md',
                        '@sm': '2xl'
                    }}>
                    <Stack space="2xl">
                        <Stack>
                            <Heading as="h1">Mauli Design System</Heading>
                            <Text as="p" variant="highlight">
                                [WIP] Design System Playground
                            </Text>
                        </Stack>

                        <Stack
                            direction={{
                                '@initial': 'vertical',
                                '@md': 'horizontal'
                            }}>
                            <Card fullWidth>
                                <Stack>
                                    <Heading
                                        as="h2"
                                        variant="normal"
                                        size="2xl">
                                        Card Normal
                                    </Heading>
                                    <Text as="p">
                                        dsj ad sadhsa dhsdg asdgsa gdsagd
                                        asdgsgd agd sgadsagd.
                                    </Text>
                                    <Inline>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                    </Inline>
                                    <Stack
                                        direction={{
                                            '@initial': 'vertical',
                                            '@sm': 'horizontal'
                                        }}
                                        justify="end"
                                        align={{
                                            '@initial': 'start',
                                            '@sm': 'center'
                                        }}
                                        fullWith>
                                        <Button onClick={() => alert('Test')}>
                                            <ArrowRight />
                                            Button
                                        </Button>
                                        <Button variant="ghost">Ghost</Button>
                                        <Button
                                            as="a"
                                            variant="link"
                                            color="normal"
                                            href="https:timoclasen.de"
                                            target="_blank">
                                            <ArrowRight />
                                            Link
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Card>

                            <Card variant="highlight" fullWidth>
                                <Stack>
                                    <Heading
                                        as="h2"
                                        variant="normal"
                                        size="2xl">
                                        Card Highlight
                                    </Heading>
                                    <Text as="p">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula
                                        eget dolor. Aenean massa. Cum sociis
                                        natoque penatibus et magnis dis
                                        parturient montes, nascetur ridiculus
                                        mus. Donec quam felis, ultricies nec,
                                        pellentesque eu, pretium quis, sem.
                                        Nulla consequat massa quis enim. Donec
                                        pede justo, fringilla vel, aliquet nec,
                                        vulputate eget, arcu. In enim justo,
                                        rhoncus ut, imperdiet a, venenatis
                                        vitae, justo. Nullam dictum felis eu
                                        pede mollis pretium. Integer tincidunt.
                                        Cras dapibus. Vivamus elementum semper
                                        nisi. Aenean vulputate eleifend tellus.
                                    </Text>
                                </Stack>
                            </Card>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </>
    );
}
