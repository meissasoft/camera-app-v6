import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Image from 'next/image';
import Header from '@/components/core/Header';
import Button from '@/components/core/Button';
import FieldInput from '@/components/core/FieldInput';
import FieldTextarea from '@/components/core/TextArea';

import image from '../../assets/png/image.png';

import { DivMain, FooterButtonStyle, SvgDiv } from './index.styles';

/**
 *
 * @returns Commerce Your video page
 */

const CommenceYourVideoKYC = () => {
  // const { t } = useTranslation('commence_your_video_kyc');
  const router = useRouter();

  const onClickHeaderIcon = () => {
    router.push('/fill_the_form');
  };

  const handelProceed = () => {
    router.push('/keeps_things_handy');
  };

  return (
    <DivMain>
      <div>
        <Header text="KYC Details" onClick={onClickHeaderIcon} />
        <SvgDiv>
          <Image src={image} />
        </SvgDiv>
        <FieldInput
          placeholder="Full Name"
          name={'mobile'}
          className="my-2 mt-5 m-auto rounded border p-2 loginInput"
        />
        <FieldInput placeholder="Father name" name={'mobile'} className="my-2 rounded border p-2 loginInput" />
        <FieldInput placeholder="Age" name={'mobile'} className="my-2   rounded border p-2 loginInput" />
        <FieldInput placeholder="Gender" name={'mobile'} className="my-2 m-auto rounded border p-2 loginInput" />
        <FieldInput placeholder="UID" name={'mobile'} className="my-2 m-auto rounded border p-2 loginInput" />
        <FieldInput placeholder="PAN Number" name={'mobile'} className="my-2 m-auto rounded border p-2 loginInput" />
        <FieldTextarea
          placeholder="Current Address"
          name={'mobile'}
          className="my-2 m-auto rounded border p-2 loginInput"
        />
        <FieldTextarea
          placeholder="Permanent Address"
          name={'mobile'}
          className="my-2 m-auto rounded border p-2 loginInput"
        />
        <FieldInput placeholder="Description" name={'mobile'} className="my-2 m-auto rounded border p-2 loginInput" />
      </div>

      <FooterButtonStyle>
        <div className="button-container mb-3">
          <Button onClick={handelProceed}>View CKYC details</Button>
        </div>
      </FooterButtonStyle>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['commence_your_video_kyc'])),
  },
});

export default CommenceYourVideoKYC;
