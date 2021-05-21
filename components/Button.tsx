import { styled } from '../stitches.config';

const Button = styled('button', {
    // Reset
    appearance: 'none',
    outline: 'none',
    textDecoration: 'none',
    userSelect: 'none',
    margin: '0',
    flexShrink: 0,
    lineHeight: '1',
    border: 'none',

    // Custom
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    variants: {
        variant: {
            solid: {
                color: '$$loContrast',
                backgroundColor: '$$hiContrast',
                padding: '$$padding',
                borderRadius: '$round'
            },
            ghost: {
                color: '$$hiContrast',
                boxShadow: 'inset 0 0 0 2px $$hiContrast',
                padding: '$$padding',
                borderRadius: '$round'
            },
            link: {
                color: '$$hiContrast'
            }
        },
        color: {
            normal: {
                $$loContrast: '$colors$gray100',
                $$hiContrast: '$colors$gray1000'
            },
            highlight: {
                $$loContrast: '$colors$indigo100',
                $$hiContrast: '$colors$indigo800'
            }
        },
        size: {
            md: {
                fontSize: '$md',
                fontWeight: '$bold',
                $$padding: '$space$md $space$lg',
                svg: {
                    size: '$md'
                },
                gap: '$sm'
            }
        },
        fullWidth: {
            true: {
                width: '100%'
            }
        }
    },
    defaultVariants: {
        variant: 'solid',
        color: 'highlight',
        size: 'md'
    }
});

export default Button;
