import router from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';
import OTPInput from '@/components/core/Otp';
import { CheckMarkSvg } from '@/assets/svg/check_mark';
import {
  ButtonWrapper,
  DivContent,
  DivContentBody,
  DivContentDescription,
  DivContentTitle,
  DivMain,
  OtpContainerWrapper,
} from './index.style';
/**
 *
 * @returns DownloadSuccessfully page
 */

const DownloadSuccessfully = () => {
  const { t } = useTranslation('download_successfully');
  const handleBack = () => {
    router.push('/otpVerification');
  };
  const handleContinue = () => {
    router.push('/keeps_things_handy');
  };
  return (
    <DivMain>
      <Heading text={t('download_successfully')} onClick={handleBack} />
      <DivContentBody>
        <DivContent>
          <CheckMarkSvg />
          <DivContentTitle>{t('file_download_successfully')}</DivContentTitle>
          <DivContentDescription>
            {t('kindly_reconfirm_your_share_code_to_grant_access_to_your_xml_file.')}
          </DivContentDescription>
        </DivContent>
        <OtpContainerWrapper>
          <OTPInput
            autoFocus
            isNumberInput
            length={4}
            inputClassName="otpInput"
            onChangeOTP={(e) => {
              console.log(e);
            }}
          />
        </OtpContainerWrapper>
      </DivContentBody>
      <ButtonWrapper>
        <Button onClick={handleContinue} className="m-auto">
          {t('proceed')}
        </Button>
      </ButtonWrapper>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['download_successfully'])),
  },
});

export default DownloadSuccessfully;
