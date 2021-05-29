import * as Polymorphic from '@radix-ui/react-polymorphic';
import { StitchesVariants } from '@stitches/react';
import { forwardRef } from 'react';

import { styled } from '../stitches.config';

const StyledButton = styled('button', {
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
                color: '$$solidText',
                backgroundColor: '$$solidBg',
                padding: '$$padding',
                borderRadius: '$round',
                '&:hover': {
                    boxShadow: 'inset 0 0 0 2px $$solidBorderHover'
                },
                '&:active': {
                    backgroundColor: '$$solidBgActive',
                    boxShadow: 'inset 0 0 0 2px $$solidBorderActive'
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 2px $$solidBorderFocus'
                },
                '&:disabled': {
                    backgroundColor: '$$solidBgDisabled'
                }
            },
            ghost: {
                color: '$$ghostText',
                boxShadow: 'inset 0 0 0 2px $$ghostBorder',
                padding: '$$padding',
                borderRadius: '$round',
                '&:hover': {
                    backgroundColor: '$$ghostBgHover'
                },
                '&:active': {
                    backgroundColor: '$$ghostBgActive'
                },
                '&:focus': {
                    color: '$$ghostTextFocus',
                    boxShadow: 'inset 0 0 0 2px $$ghostBorderFocus'
                },
                '&:disabled': {
                    color: '$$ghostTextDisabled',
                    boxShadow: 'inset 0 0 0 2px $$ghostBorderDisabled'
                }
            },
            link: {
                color: '$$linkText',
                '&:hover': {
                    color: '$$linkTextHover'
                },
                '&:active': {
                    color: '$$linkTextActive'
                },
                '&:focus': {
                    color: '$$linkTextFocus'
                },
                '&:disabled': {
                    color: '$$linkTextDisabled'
                }
            }
        },
        color: {
            normal: {
                $$solidText: '$colors$gray100',
                $$solidBg: '$colors$gray1000',
                $$solidBorderHover: '$colors$gray900',
                $$solidBorderActive: '$colors$gray900',
                $$solidBgActive: '$colors$gray1000',
                $$solidBorderFocus: '$colors$gray900',
                $$solidBgDisabled: '$colors$gray600',

                $$ghostText: '$colors$gray1000',
                $$ghostBorder: '$colors$gray1000',
                $$ghostBgHover: '$colors$gray200',
                $$ghostBgActive: '$colors$gray200',
                $$ghostTextFocus: '$colors$gray900',
                $$ghostBorderFocus: '$colors$gray900',
                $$ghostTextDisabled: '$colors$gray600',
                $$ghostBorderDisabled: '$colors$gray600',

                $$linkText: '$colors$gray1000',
                $$linkTextHover: '$colors$gray900',
                $$linkTextActive: '$colors$gray900',
                $$linkTextFocus: '$colors$gray900',
                $$linkTextDisabled: '$colors$gray600'
            },
            highlight: {
                $$solidText: '$colors$indigo100',
                $$solidBg: '$colors$indigo800',
                $$solidBorderHover: '$colors$indigo1000',
                $$solidBorderActive: '$colors$indigo1000',
                $$solidBgActive: '$colors$indigo900',
                $$solidBorderFocus: '$colors$indigo1000',
                $$solidBgDisabled: '$colors$indigo600',

                $$ghostText: '$colors$indigo800',
                $$ghostBorder: '$colors$indigo800',
                $$ghostBgHover: '$colors$indigo200',
                $$ghostBgActive: '$colors$indigo200',
                $$ghostTextFocus: '$colors$indigo900',
                $$ghostBorderFocus: '$colors$indigo900',
                $$ghostTextDisabled: '$colors$indigo600',
                $$ghostBorderDisabled: '$colors$indigo600',

                $$linkText: '$colors$indigo800',
                $$linkTextHover: '$colors$indigo1000',
                $$linkTextActive: '$colors$indigo1000',
                $$linkTextFocus: '$colors$indigo1000',
                $$linkTextDisabled: '$colors$indigo600'
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
        color: 'normal',
        size: 'md'
    }
});

interface ButtonProps extends StitchesVariants<typeof StyledButton> {
    as?: 'button' | 'a';
}

const Button = forwardRef(function Button(props, ref) {
    return <StyledButton ref={ref} {...props} />;
}) as Polymorphic.ForwardRefComponent<'button', ButtonProps>;

export default Button;
