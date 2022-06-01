import router from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';
import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import Button from '@/components/core/Button';

import FieldInput from '@/components/core/FieldInput';
import { VectorIcon } from '@/assets/svg/reload';
import {
  DivMain,
  CapchaContainer,
  DivInner,
  DivBarIcon,
  DivCrossIcon,
  StyledTitle,
  StyledDescription,
  StyledSpan,
  CapchaTextDiv,
  CapchaTextSpan,
  BottomButtonDiv,
} from './index.styles';

const AadhaarNumber = () => {
  const { t } = useTranslation('aadhaar_number');

  const handleBack = () => {
    router.push('/aadhaar_offline_kyc');
  };

  const handleSendOtp = () => {
    router.push('/otpVerification');
  };

  return (
    <DivMain>
      <DivInner>
        <div>
          <DivBarIcon>
            <BarIcon />
          </DivBarIcon>
          <DivCrossIcon onClick={handleBack}>
            <CrossIcon />
          </DivCrossIcon>
          <StyledTitle>{t('aadhaar_number')}</StyledTitle>
          <StyledDescription>{t('enter_your_12_digit_aadhaar_number_to_begin')}</StyledDescription>
          <FieldInput
            placeholder={`${t('aadhaar_number')}*`}
            name="aadhar"
            className="my-2 m-auto rounded border p-2"
          />
          <FieldInput
            placeholder={`${t('enter_security_code')}*`}
            name={'security'}
            className="my-2 m-auto rounded border p-2"
          />
          <StyledSpan>{t('type_the_character_you_see_in_the_picture')}</StyledSpan>
          <CapchaContainer>
            <CapchaTextDiv>
              <CapchaTextSpan>HnsoeG</CapchaTextSpan>
            </CapchaTextDiv>
            <VectorIcon />
          </CapchaContainer>
        </div>
        <BottomButtonDiv>
          <Button onClick={handleSendOtp} className="my-5 m-auto">
            {t('send_otp')}
          </Button>
        </BottomButtonDiv>
      </DivInner>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['aadhaar_number'])),
  },
});

export default AadhaarNumber;
