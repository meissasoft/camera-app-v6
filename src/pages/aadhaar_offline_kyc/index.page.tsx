import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRef } from 'react';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import UploadCard from '@/components/UploadCard';
import { DivMain, FooterButtonStyle, FormLabel, StyledSpan, ButtonContainer, StepLayoutWrapper } from './index.styles';
/**
 *
 * @returns AadhaarOfflineKyc page
 */
const AadhaarOfflineKyc = () => {
  const { t } = useTranslation('aadhaar_offline_kyc');

  const ref = useRef<any>(null);

  const router = useRouter();

  const onClickHeaderIcon = () => {
    router.push('/aadhaar_xml');
  };

  const handleGeneration = () => {
    router.push('/aadhaar_number');
  };

  const handleProceed = () => {
    router.push('/aadhaar_number');
  };

  const onClickCard = () => {
    console.log('Card Clicked');
  };

  return (
    <DivMain>
      <div>
        <Header text={t('aadhaar_offline_kyc')} onClick={onClickHeaderIcon} />
        <StepLayoutWrapper>
          <UploadCard
            heading={t('upload_from_device')}
            content={t('zip_file_should_not_be_more_that_3_days_old')}
            onClick={onClickCard}
            ref={ref}
          />
        </StepLayoutWrapper>
      </div>
      <FooterButtonStyle>
        <FormLabel>{t('don’t_have_an_aadhaar_xml_file?')}</FormLabel>
        <ButtonContainer>
          <Button isBottom onClick={handleGeneration} className="m-auto" isTransparent>
            <StyledSpan>{t('generate_now')}</StyledSpan>
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={handleProceed} className="m-auto">
            {t('proceed')}
          </Button>
        </ButtonContainer>
      </FooterButtonStyle>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['aadhaar_offline_kyc'])),
  },
});

export default AadhaarOfflineKyc;
