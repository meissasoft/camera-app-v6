import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import FieldInput from '@/components/core/FieldInput';

import Calendar from '@/assets/svg/calander';
import { DivMain, FooterButtonStyle } from './index.styles';
/**
 *
 * @returns fill the form
 */
const FillTheForm = () => {
  // const { t } = useTranslation('fill_the_form');
  const router = useRouter();
  const onClickHeaderIcon = () => {
    router.push('/commence_video');
  };

  const onClickHandler = () => {
    router.push('/commence_your_video_kyc');
  };

  return (
    <DivMain>
      <div>
        <Header text="Enter the details" onClick={onClickHeaderIcon} />
        <FieldInput
          placeholder="Enter PAN number*"
          name={'mobile'}
          className="my-2 mt-5 m-auto rounded border p-2 text"
        />
        <div className="sd-container">
          <FieldInput
            type="text"
            placeholder="Enter DOB*"
            onChange={(e) => console.log(e.target.value)}
            name="selected_date"
            className="my-2 m-auto rounded border p-2 text"
            isDate
          />
          <span className="open-button">
            <button type="button">
              <Calendar />
            </button>
          </span>
        </div>
      </div>
      <FooterButtonStyle>
        <div className="button-container">
          <Button className="m-auto" onClick={onClickHandler}>
            Fetch details
          </Button>
        </div>
      </FooterButtonStyle>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['fill_the_form'])),
  },
});

export default FillTheForm;
