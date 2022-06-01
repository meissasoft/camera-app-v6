import * as yup from 'yup';

export const TextFieldValidation = yup.object().shape({
  text: yup.string().min(1).required('Enter Value'),
});
