import { CSSProperties } from 'react';

export interface InputProps {
  value: any;
  onChange: (event: any) => void;
  placeholder?: string;
  label?: string;
  helperText?: string;
  type?: 'email' | 'password' | 'text' | 'date' | 'file' | 'number' | 'time';
  className?: string;
  leadingIcon?: any;
  trailingIcon?: any;
  labelClassName?: string;
  style?: CSSProperties;
  disabled?: boolean;
  error?: string;
  showErrorText?: boolean;
}
