import { Inline, Label } from '../src';

export default {
    title: 'Layout/Inline',
    component: Inline
};

export const Normal = () => (
    <Inline>
        <Label>Label</Label>
        <Label>Label</Label>
        <Label>Label</Label>
    </Inline>
);
