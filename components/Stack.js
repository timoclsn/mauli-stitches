import { styled, theme } from '../stitches.config';

const space = Object.keys(theme.space).reduce(
    (acc, value) => ({
        ...acc,
        [value]: {
            $$gap: `$space$${value}`
        }
    }),
    {}
);

const Stack = styled('div', {
    display: 'flex',
    gap: '$$gap',

    variants: {
        direction: {
            vertical: {
                flexDirection: 'column'
            },
            horizontal: {
                flexDirection: 'row'
            }
        },
        space,
        align: {
            start: {
                alignItems: 'flex-start'
            },
            center: {
                alignItems: 'center'
            },
            end: {
                alignItems: 'flex-end'
            },
            baseline: {
                alignItems: 'baseline'
            }
        },
        justify: {
            start: {
                justifyContent: 'flex-start'
            },
            center: {
                justifyContent: 'center'
            },
            end: {
                justifyContent: 'flex-end'
            },
            between: {
                justifyContent: 'space-between'
            }
        },
        wrap: {
            true: {
                flexWrap: 'wrap'
            }
        },
        fullWith: {
            true: {
                width: '100%'
            }
        },
        debug: {
            true: {
                border: '1px solid red'
            }
        }
    },

    defaultVariants: {
        direction: 'vertical',
        space: 'md',
        align: 'start',
        justify: 'start'
    }
});

export default Stack;
