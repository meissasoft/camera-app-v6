import { ErrorInfo } from '@/assets/svg/error-info';
import { DivRelative, FieldTextAreaStyle, FieldInputLabel, StyledErrorDiv, StyledErrorText } from './TextArea.styles';
import { IInputProps } from './TextArea.types';

const FieldTextArea = ({ className, placeholder, value, error, ...props }: IInputProps) => {
  return (
    <DivRelative>
      <FieldTextAreaStyle {...props} className={`${className}`} error={error && error.length > 0 ? true : false} />
      <FieldInputLabel className="label" value={value}>
        <span>{placeholder}</span>
      </FieldInputLabel>
      {error && error.length > 0 && (
        <StyledErrorDiv>
          <ErrorInfo />
          <StyledErrorText>{error}</StyledErrorText>
        </StyledErrorDiv>
      )}
    </DivRelative>
  );
};

export default FieldTextArea;
