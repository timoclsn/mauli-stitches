import React from 'react';
import { ArrowRight } from 'react-feather';

import { Button } from '../components';

export default {
    title: 'Button',
    component: Button
};

export const Normal = () => <Button>Button</Button>;

export const Highlight = () => <Button color="highlight">Button</Button>;

export const Ghost = () => <Button variant="ghost">Button</Button>;

export const GhostHighlight = () => (
    <Button variant="ghost" color="highlight">
        Button
    </Button>
);

export const Icon = () => (
    <Button color="highlight">
        <ArrowRight />
        Button
    </Button>
);

export const Link = () => (
    <Button variant="link" color="highlight">
        <ArrowRight />
        Button
    </Button>
);
