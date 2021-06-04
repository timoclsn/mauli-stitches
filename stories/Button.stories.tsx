import { ArrowRight } from 'react-feather';

import { Button } from '../components';

export default {
    title: 'Primitives/Button',
    component: Button
};

export const SolidNormal = () => <Button>Button</Button>;

export const SolidHighlight = () => <Button color="highlight">Button</Button>;

export const SolidWithIcon = () => (
    <Button color="highlight">
        <ArrowRight />
        Button
    </Button>
);

export const GhostNormal = () => <Button variant="ghost">Button</Button>;

export const GhostHighlight = () => (
    <Button variant="ghost" color="highlight">
        Button
    </Button>
);

export const GhostWithIcon = () => (
    <Button variant="ghost" color="highlight">
        <ArrowRight />
        Button
    </Button>
);

export const LinkNormal = () => (
    <Button as="a" variant="link">
        Button
    </Button>
);

export const LinkHighlight = () => (
    <Button as="a" variant="link" color="highlight">
        Button
    </Button>
);

export const LinkWithIcon = () => (
    <Button as="a" variant="link">
        <ArrowRight />
        Button
    </Button>
);
