import router from 'next/router';

import { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DoneIcon } from '@/assets/svg/done-icon';
import CameraBottomWithButton from '@/components/core/CameraBottomWithButton';
import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { setRecordedVideo } from '@/store/app/appSlice';

import {
  DivCameraBox,
  DiveDone,
  DivMain,
  DivWords,
  SmallTextStyled,
  DivVideoStyled,
  TextStyled,
  Video,
  DivFlex,
} from './index.styles';

/**
 *
 * @returns Camera Video Page
 */

const CameraVideo = () => {
  const { t } = useTranslation('camera_video');
  const [isDone, setIsDone] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(10);
  const [startRecording, setStartRecording] = useState<boolean>(false);

  const [words] = useState('');
  const [instruction, setInstruction] = useState<any>(t('position_your_face'));
  const [description, setDescriptoin] = useState<any>(t(`keep_your_face_within_the_oval`));
  const videoRef = useRef(null);
  const mediaRecorder: any = useRef(null);
  const blobsRecorded: any = [];

  const dispatch = useAppDispatch();

  const getVideo = () => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({
          video: { width: 1920, height: 1080 },
          audio: true,
        })
        .then((stream) => {
          const video = videoRef.current as any;
          video.setAttribute('autoplay', '');
          video.setAttribute('muted', '');
          video.setAttribute('playsinline', '');
          video.srcObject = stream;
          video.play();
          try {
            mediaRecorder.current = new MediaRecorder(stream, {
              mimeType: 'video/webm',
            });
            mediaRecorder.current.addEventListener('dataavailable', function (e: any) {
              blobsRecorded.push(e.data);
            });
          } catch (error) {
            mediaRecorder.current = new MediaRecorder(stream, {
              mimeType: 'video/mp4',
            });
            mediaRecorder.current.addEventListener('dataavailable', function (e: any) {
              blobsRecorded.push(e.data);
            });
          }
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  useEffect(() => {
    if (startRecording === true) {
      if (counter > 0) {
        const timer = setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }
      setStartRecording(false);
    }
  }, [startRecording, counter]);

  const handleCancel = () => {
    router.push('/verification');
  };

  const handleRetake = () => {};

  const handleOnClick = () => {
    if (mediaRecorder && mediaRecorder.current) {
      try {
        mediaRecorder.current.start(1000);
      } catch (err) {
        console.log('');
      }
    }
    setStartRecording(true);
    startVideoRecording();
  };

  const startVideoRecording = () => {
    setIsDone(false);
    setTimeout(() => {
      setInstruction(t('perfect'));
      setDescriptoin(t('please_capture_your_face'));
    }, 3000);
    setTimeout(faceDone, 8000);
    setTimeout(stop, 10000);
  };

  const faceDone = () => {
    setIsDone(true);
  };

  const stop = () => {
    try {
      mediaRecorder?.current?.stop();
    } catch (err) {
      console.log('');
    }
    setIsDone(true);
    dispatch(setRecordedVideo(URL.createObjectURL(new Blob(blobsRecorded, { type: 'video/mp4' }))));
    router.push('/video_screen');
  };

  return (
    <DivMain>
      <DivVideoStyled>
        <DivCameraBox background={isDone}>
          <Video ref={videoRef} isDone={isDone} muted></Video>
          <DiveDone>{isDone && <DoneIcon />}</DiveDone>
        </DivCameraBox>
        <TextStyled>{instruction}</TextStyled>
        <SmallTextStyled>{description}</SmallTextStyled>
        <DivWords>{words.length > 0 && words}</DivWords>
      </DivVideoStyled>
      <DivFlex>
        <CameraBottomWithButton
          isVideo
          onClick={handleOnClick}
          onCancel={handleCancel}
          onReTake={handleRetake}
          counter={`00:00:${counter}`}
          cancel={t('cancel')}
          retake={t('retake')}
        />
      </DivFlex>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['camera_video'])),
  },
});

export default CameraVideo;
