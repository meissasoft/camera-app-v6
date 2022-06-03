import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
  type?: string;
  InputProps?: any;
  isDate?: boolean;
  error?: string;
}
