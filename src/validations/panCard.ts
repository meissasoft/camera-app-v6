import * as yup from 'yup';

export const panCardScheema = yup.object().shape({
  panNumber: yup.string().required('Pan number is required'),
  dob: yup.string().required('Date of birth is required'),
});
