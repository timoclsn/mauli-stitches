import { IdProvider } from '@radix-ui/react-id';
import type { ReactNode } from 'react';
import React from 'react';

import { globalStyles } from './stitches.config';

interface Props {
    children: ReactNode;
}

export function DesignSystemProvider({ children }: Props) {
    globalStyles();
    return <IdProvider>{children}</IdProvider>;
}
