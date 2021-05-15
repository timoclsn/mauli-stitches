import { forwardRef } from 'react';

import { styled } from '../stitches.config';

const StyledButton = styled('button', {
    // Reset
    appearance: 'none',
    outline: 'none',
    textDecoration: 'none',
    userSelect: 'none',
    margin: '0',
    flexShrink: '0',
    lineHeight: '1',
    border: 'none',

    // Custom
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$round',
    cursor: 'pointer',

    variants: {
        variant: {
            solid: {
                color: '$white',
                backgroundColor: '$highlight',
                '&:hover': {
                    boxShadow: 'inset 0 0 0 2px $colors$hiContrast'
                },
                '&:active': {
                    opacity: 0.7, // TODO: Use color
                    boxShadow: 'inset 0 0 0 2px $colors$hiContrast'
                },
                '&:focus': {
                    outline: 'none',
                    boxShadow:
                        'inset 0 0 0 2px $colors$hiContrast, 0 0 0 1px $colors$hiContrast'
                },
                '&:disabled': {
                    opacity: 0.5 // TODO: Use color
                }
            },
            ghost: {
                color: '$hiContrast',
                boxShadow: 'inset 0 0 0 2px $colors$hiContrast',
                '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)' // TODO: Use color
                },
                '&:active': {
                    backgroundColor: 'rgba(255,255,255,0.3)' // TODO: Use color
                },
                '&:focus': {
                    outline: 'none',
                    boxShadow:
                        'inset 0 0 0 2px $colors$highlight, 0 0 0 1px $colors$highlight'
                },
                '&:disabled': {
                    opacity: 0.5 // TODO: Use color
                }
            },
            link: {
                p: '0',
                color: 'inherit',
                backgroundColor: 'inherit',
                '&:hover': {
                    opacity: 0.5 // TODO: Use color
                },
                '&:active': {},
                '&:focus': {},
                '&:disabled': {
                    opacity: 0.3 // TODO: Use color
                }
            }
        },

        size: {
            md: {
                fontSize: '$md',
                fontWeight: '$bold',
                padding: '$md $lg',
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
        size: 'md'
    }
});

export default forwardRef(function Button(
    { children, as, type, ...props },
    ref
) {
    return (
        <StyledButton
            as={props.href ? 'a' : as}
            type={as === 'button' ? type : undefined}
            ref={ref}
            {...props}>
            {children}
        </StyledButton>
    );
});
