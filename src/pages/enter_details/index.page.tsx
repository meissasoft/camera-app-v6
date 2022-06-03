import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Field, Formik, FormikHelpers } from 'formik';

// import { useEffect } from 'react';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import FieldInput from '@/components/core/FieldInput';

import Calendar from '@/assets/svg/calander';
import { panCardScheema } from '@/validations/panCard';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxTypedHooks';
import { panCardDetailsThunk } from '@/store/user/userSlice';
import { getUserDataSelector } from '@/store/user';
import Loader from '@/components/core/Loader';
import { DivMain, FooterButtonStyle, DivDateField, DivDateSpan, DivDateCalendarIcon, StyledForm } from './index.styles';
/**
 *
 * @returns fill the form
 */

interface Values {
  panNumber: string;
  dob: string;
}

const FillTheForm = () => {
  // const { setFieldError } = useFormikContext();
  const initialValue: Values = {
    panNumber: '',
    dob: '',
  };
  const { status } = useAppSelector(getUserDataSelector);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('enter_details');
  const router = useRouter();

  // useEffect(() => {
  //   if (error)
  // }, [error]);

  const onClickHeaderIcon = () => {
    router.push('/commence_your_video_kyc');
  };

  const onFormSubmit = async (values: Values, { resetForm }: FormikHelpers<Values>) => {
    const reqData = {
      panNumber: values.panNumber,
      dob: values.dob,
    };
    // Call the api
    dispatch(panCardDetailsThunk(reqData)).catch((err) => {
      console.log('error', err);
    });
    // router.push('/fetching_details');
    resetForm({});
  };

  return (
    <DivMain>
      <Formik initialValues={initialValue} onSubmit={onFormSubmit} validationSchema={panCardScheema}>
        {({ values, errors }) => {
          return (
            <StyledForm>
              <div>
                <Header text={t('enter_the_details')} onClick={onClickHeaderIcon} />
                <Field
                  as={FieldInput}
                  id="panNumber"
                  placeholder={t('enter_pan_number')}
                  name="panNumber"
                  autoComplete="off"
                  autoFocus
                  className="my-2 m-auto"
                  value={values.panNumber}
                  error={errors.panNumber}
                />
                <DivDateField>
                  <Field
                    as={FieldInput}
                    id="dob"
                    placeholder={t('enter_dob')}
                    name="dob"
                    autoComplete="off"
                    className="my-2 m-auto"
                    value={values.dob}
                    isDate
                    error={errors.dob}
                  />
                  <DivDateSpan>
                    <DivDateCalendarIcon>
                      <Calendar />
                    </DivDateCalendarIcon>
                  </DivDateSpan>
                </DivDateField>
              </div>
              <FooterButtonStyle>
                <Button className="m-auto" type="submit" disabled={Object.keys(errors).length > 0}>
                  {status === 'loading' ? <Loader /> : t('fetch_details')}
                </Button>
              </FooterButtonStyle>
            </StyledForm>
          );
        }}
      </Formik>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['enter_details'])),
  },
});

export default FillTheForm;
