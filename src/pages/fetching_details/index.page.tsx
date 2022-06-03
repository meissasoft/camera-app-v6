import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/components/core/Header';

import { HourGlassIcon } from '@/assets/svg/hourglass-icon';
import { DivMain, DivSvg, DivForm, ParagraphStyled, TextStyled } from './index.styles';
/**
 *
 * @returns Fetching Details
 */
const FetchingDetails = () => {
  const router = useRouter();
  const { t } = useTranslation('initiating_video');

  useEffect(() => {
    setTimeout(() => {
      router.push('/kyc_details');
    }, 4000);
  }, []);

  const onClickHeaderIcon = () => {
    router.push('/enter_details');
  };

  return (
    <DivMain>
      <div>
        <Header text={t('fetching_details')} onClick={onClickHeaderIcon} />
        <DivSvg>
          <HourGlassIcon />
        </DivSvg>
        <DivForm>
          <TextStyled>{t('please_wait...')}</TextStyled>
          <ParagraphStyled>{t('while_we_are_searching_for_the_agent_to_initiate_the_video_call')}</ParagraphStyled>
        </DivForm>
      </div>
    </DivMain>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['initiating_video'])),
  },
});

export default FetchingDetails;
