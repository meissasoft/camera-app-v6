import { useRef } from 'react';
import { FieldInputStyled } from './FieldInput.styles';
import { IInputProps } from './FieldInput.types';

const FieldInput = ({ className, isDate, ...props }: IInputProps) => {
  const ref: any = useRef(null);
  const onFocus = () => {
    if (isDate) {
      ref.current.type = 'date';
    }
  };
  const onBlur = () => {
    if (isDate) {
      ref.current.type = 'text';
    }
  };
  return <FieldInputStyled onFocus={onFocus} onBlur={onBlur} ref={ref} className={`${className}`} {...props} />;
};

export default FieldInput;
