import type { ImgHTMLAttributes } from 'react';

// ---------------------------------------------------------------------------------------------- //

export interface CounterProps extends ImgHTMLAttributes<HTMLDivElement> {
  show: boolean;
}

// ---------------------------------------------------------------------------------------------- //

export type Visibility = 'visible' | 'hidden';
