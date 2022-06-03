import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';

import { DivBottom, DivMain, VideoCardStyled, VideoCardText, StyledRetake } from './index.style';

/**
 *
 * @returns VideoScreen page
 */

const VideoScreen = () => {
  const { t } = useTranslation('video_screen');
  const { recordedVideo } = useAppSelector(getAppDataSelector);

  const onClickHeaderIcon = () => {
    router.push('/camera_video');
  };
  const handleContinue = () => {
    router.push('/status_updated_successfully');
  };
  const handleRetake = () => {
    router.push('/camera_video');
  };

  return (
    <DivMain>
      <div>
        <Header text={t('selfie_photo_confirmation')} onClick={onClickHeaderIcon} />
        <VideoCardStyled>
          <video width="100%" height="388" controls playsInline>
            <source src={recordedVideo} type="video/mp4" />
          </video>
        </VideoCardStyled>
        <VideoCardText>
          {t('if_you_are_not_satified_with_your_selfie_photo,_we_suggest_you_to_re-take_it.')}
        </VideoCardText>
      </div>
      <DivBottom>
        <Button className="mx-auto" onClick={handleContinue}>
          {t('submit_video')}
        </Button>
        <Button className="mx-auto btn" onClick={handleRetake} isTransparent>
          <StyledRetake>{t('re_take_video')}</StyledRetake>
        </Button>
      </DivBottom>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['video_screen'])),
  },
});

export default VideoScreen;
