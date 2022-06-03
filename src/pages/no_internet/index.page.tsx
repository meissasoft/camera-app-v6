import router from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { NoWifi } from '@/assets/svg/no-wifi';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { DivBottom, DivMain, NoInternetText, NoInternetDescription, NoInternetIconDiv } from './index.styles';

/**
 *
 * @returns NoInternetConnectionPage page
 */

const NoInternetConnectionPage = () => {
  const onClickHeaderIcon = () => {
    router.back();
  };

  const { t } = useTranslation('kyc_details');

  return (
    <DivMain>
      <Header text={t('kyc_details')} onClick={onClickHeaderIcon} />
      <div>
        <NoInternetIconDiv>
          <NoWifi />
        </NoInternetIconDiv>
        <NoInternetText>{t('No Internet')}</NoInternetText>
        <NoInternetDescription>{t('Oops! looks like there’s no internet connection')}</NoInternetDescription>
      </div>
      <DivBottom>
        <Button className="m-auto" onClick={onClickHeaderIcon}>
          {t('Retry')}
        </Button>
      </DivBottom>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['kyc_details'])),
  },
});

export default NoInternetConnectionPage;
