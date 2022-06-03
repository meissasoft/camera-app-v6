import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CardIcon } from '@/assets/svg/card-icon';
import Header from '@/components/core/Header';
import StepLayout from '@/components/StepsLayout';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';

import {
  DivMain,
  VerificationCardStyled,
  VerificationSmallTextStyled,
  VerificationStyled,
  VerificationTextStyled,
} from './index.styles';

/**
 *
 * @returns Verification page
 */

const Verification = () => {
  const { verificationStep } = useAppSelector(getAppDataSelector);

  const { t } = useTranslation(['verification', 'commence_video']);
  const { t: t1 } = useTranslation(['commence_video']);

  const onClickHeaderIcon = () => {
    router.push('/ckyc_no');
  };

  const goToVideo = () => {
    router.push('/camera_video');
  };

  const handleStart = () => {
    router.push('/enter_details');
  };

  return (
    <DivMain>
      <Header text={t('identity_verification')} onClick={onClickHeaderIcon} />
      <VerificationStyled>
        <VerificationCardStyled>
          <CardIcon />
        </VerificationCardStyled>
        <VerificationTextStyled>{t('verify_your_identity')}</VerificationTextStyled>
        <VerificationSmallTextStyled>{t('it_will_take_less_than_2_minutes')}</VerificationSmallTextStyled>
        <StepLayout
          rightIcon={verificationStep === 2 ? 'done' : 'arrow'}
          step={t('step1')}
          heading={'CKYC'}
          content={t('take_a_picture_of_an_identity_document_and_upload_it_for_verification')}
          onClick={handleStart}
        />
        <StepLayout
          rightIcon={'arrow'}
          step={t('step2')}
          heading={t1('facial_verification')}
          content={t('speak_out_load_and_move_your_head_finish_actions_in_25_seconds.')}
          isDisabled={verificationStep === 2 ? false : true}
          onClick={goToVideo}
        />
      </VerificationStyled>
    </DivMain>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['verification', 'commence_video'])),
  },
});
export default Verification;
