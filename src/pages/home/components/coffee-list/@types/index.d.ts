import type { ButtonHTMLAttributes } from 'react';
import type { Color } from '../../../../../@types/styles';

// ---------------------------------------------------------------------------------------------- //

interface FilterButtonProps extends ButtonHTMLAttributes<ButtonHTMLAttributes> {
  isActive?: boolean;
}

type Background = Color | 'transparent';
