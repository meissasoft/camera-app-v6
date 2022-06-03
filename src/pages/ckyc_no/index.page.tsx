import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Header from '@/components/core/Header';
import Button from '@/components/core/Button';
import FieldInput from '@/components/core/FieldInput';
import FieldTextArea from '@/components/core/TextArea';

import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { setVerificationStep } from '@/store/app';
import image from '@/assets/png/image.png';

import { DivMain, FooterButtonStyle, SvgDiv } from './index.styles';

/**
 *
 * @returns CKYC_NO page
 */

const CKYC_NO = () => {
  const { t } = useTranslation('ckyc_no');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onClickHeaderIcon = () => {
    router.push('/kyc_details');
  };

  const handelProceed = () => {
    dispatch(setVerificationStep(2));
    router.push('/verification');
  };

  return (
    <DivMain>
      <div>
        <Header text="CKYC No: 2398583658355" onClick={onClickHeaderIcon} />
        <SvgDiv>
          <Image src={image} />
        </SvgDiv>
        <FieldInput placeholder={t('full_name')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
        <FieldInput placeholder={t('father_name')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
        <FieldInput placeholder={t('dob')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
        <FieldInput placeholder={t('gender')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
        <FieldInput placeholder={t('uid')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
        <FieldInput placeholder={t('pan_number')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
        <FieldTextArea placeholder={t('current_address')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
        <FieldTextArea
          placeholder={t('permanent_address')}
          name={'mobile'}
          className="my-2 m-auto"
          autoComplete="off"
        />
        <FieldTextArea placeholder={t('description')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
      </div>

      <FooterButtonStyle>
        <Button className="m-auto" onClick={handelProceed}>
          {t('proceed')}
        </Button>
      </FooterButtonStyle>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['ckyc_no'])),
  },
});

export default CKYC_NO;
