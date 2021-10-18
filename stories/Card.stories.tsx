import { Card, Heading, Stack, Text } from '../src';

export default {
  title: 'Layout/Card',
  component: Card,
};

export const Normal = () => (
  <Card>
    <Stack>
      <Heading>Heading</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.
      </Text>
    </Stack>
  </Card>
);

export const Highlight = () => (
  <Card variant="highlight">
    <Stack>
      <Heading>Heading</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.
      </Text>
    </Stack>
  </Card>
);
