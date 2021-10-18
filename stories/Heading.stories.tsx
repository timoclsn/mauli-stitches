import { Heading } from '../src';

export default {
  title: 'Primitives/Heading',
  component: Heading,
};

export const Normal = () => <Heading>Heading</Heading>;

export const Highlight = () => <Heading variant="highlight">Heading</Heading>;
