import Head from 'next/head';
import { ArrowRight } from 'react-feather';

import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  Inline,
  Label,
  Stack,
  Text,
} from '../src';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mauli Stitches</title>
      </Head>

      <Container>
        <Box
          inset={{
            '@initial': 'md',
            '@sm': '2xl',
          }}
        >
          <Stack space="2xl">
            <Stack>
              <Heading as="h1">Mauli Stitches</Heading>
              <Text as="p" variant="highlight">
                Experimental design system exploration with Stitches.
              </Text>
            </Stack>

            <Stack
              direction={{
                '@initial': 'vertical',
                '@md': 'horizontal',
              }}
            >
              <Card fullWidth>
                <Stack>
                  <Heading variant="normal" size="2xl">
                    Card Normal
                  </Heading>
                  <Text as="p">
                    dsj ad sadhsa dhsdg asdgsa gdsagd asdgsgd agd sgadsagd.
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
                      '@sm': 'horizontal',
                    }}
                    justify="end"
                    align={{
                      '@initial': 'start',
                      '@sm': 'center',
                    }}
                    fullWith
                  >
                    <Button color="highlight" onClick={() => alert('Test')}>
                      <ArrowRight />
                      Button
                    </Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button
                      as="a"
                      variant="link"
                      href="https:timoclasen.de"
                      target="_blank"
                    >
                      <ArrowRight />
                      Link
                    </Button>
                  </Stack>
                </Stack>
              </Card>

              <Card variant="highlight" fullWidth>
                <Stack>
                  <Heading variant="normal" size="2xl">
                    Card Highlight
                  </Heading>
                  <Text as="p">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus.
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
