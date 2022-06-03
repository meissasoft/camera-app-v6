import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import FieldInput from '@/components/core/FieldInput';
import KYCVideo from '@/assets/svg/kyc_video';

import { DivMain, FooterButtonStyle, SvgDiv } from './index.styles';

/**
 *
 * @returns Commerce Your video page
 */

const CommenceYourVideoKYC = () => {
  const { t } = useTranslation('kyc_details');
  const router = useRouter();

  const onClickHeaderIcon = () => {
    router.push('/fetching_details');
  };

  const handelProceed = () => {
    router.push('/ckyc_no');
  };

  return (
    <DivMain>
      <div>
        <Header text={t('kyc_details')} onClick={onClickHeaderIcon} />
        <SvgDiv>
          <KYCVideo />
        </SvgDiv>
        <FieldInput placeholder={t('ckyc_number')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
        <FieldInput placeholder={t('full_name')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
        <FieldInput placeholder={t('father_name')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
        <FieldInput placeholder={t('age')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
        <FieldInput placeholder={t('description')} name={'mobile'} className="my-2 m-auto" autoComplete="off" />
      </div>
      <FooterButtonStyle>
        <Button onClick={handelProceed} className="m-auto">
          {t('view_ckyc_details')}
        </Button>
      </FooterButtonStyle>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['kyc_details'])),
  },
});

export default CommenceYourVideoKYC;
