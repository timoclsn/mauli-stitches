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
                $$solidText: '$colors$gray2',
                $$solidBg: '$colors$gray12',
                $$solidBorderHover: '$colors$gray11',
                $$solidBorderActive: '$colors$gray11',
                $$solidBgActive: '$colors$gray12',
                $$solidBorderFocus: '$colors$gray11',
                $$solidBgDisabled: '$colors$gray7',

                $$ghostText: '$colors$gray12',
                $$ghostBorder: '$colors$gray12',
                $$ghostBgHover: '$colors$gray3',
                $$ghostBgActive: '$colors$gray3',
                $$ghostTextFocus: '$colors$gray11',
                $$ghostBorderFocus: '$colors$gray11',
                $$ghostTextDisabled: '$colors$gray7',
                $$ghostBorderDisabled: '$colors$gray7',

                $$linkText: '$colors$gray12',
                $$linkTextHover: '$colors$gray11',
                $$linkTextActive: '$colors$gray11',
                $$linkTextFocus: '$colors$gray11',
                $$linkTextDisabled: '$colors$gray7'
            },
            highlight: {
                $$solidText: '$colors$indigo2',
                $$solidBg: '$colors$indigo9',
                $$solidBorderHover: '$colors$indigo12',
                $$solidBorderActive: '$colors$indigo12',
                $$solidBgActive: '$colors$indigo11',
                $$solidBorderFocus: '$colors$indigo12',
                $$solidBgDisabled: '$colors$indigo7',

                $$ghostText: '$colors$indigo9',
                $$ghostBorder: '$colors$indigo9',
                $$ghostBgHover: '$colors$indigo3',
                $$ghostBgActive: '$colors$indigo3',
                $$ghostTextFocus: '$colors$indigo11',
                $$ghostBorderFocus: '$colors$indigo11',
                $$ghostTextDisabled: '$colors$indigo7',
                $$ghostBorderDisabled: '$colors$indigo7',

                $$linkText: '$colors$indigo9',
                $$linkTextHover: '$colors$indigo12',
                $$linkTextActive: '$colors$indigo12',
                $$linkTextFocus: '$colors$indigo12',
                $$linkTextDisabled: '$colors$indigo7'
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
