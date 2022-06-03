import router from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { Denied } from '@/assets/svg/denied';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';
import { DivBottom, DivMain, StyledHeading, StyledDescription, SvgDiv } from './index.styles';

/**
 *
 * @returns KycDetailsError page
 */

const KycDetailsError = () => {
  const { noRecordFound, updationFailed } = useAppSelector(getAppDataSelector);

  const onClickHeaderIcon = () => {
    router.back();
  };

  const onClickTry = () => {
    if (noRecordFound) {
      router.push('/enter_details');
    } else if (updationFailed) {
      router.push('/ckyc_no');
    }
    router.back();
  };

  const { t } = useTranslation('kyc_details');

  return (
    <DivMain>
      <Header text={t('kyc_details')} onClick={onClickHeaderIcon} />
      <div>
        <SvgDiv>
          <Denied />
        </SvgDiv>
        <StyledHeading>
          {' '}
          {noRecordFound ? t('No Record Found') : updationFailed ? t('KYC updation failed') : t('')}
        </StyledHeading>
        <StyledDescription>
          {' '}
          {noRecordFound
            ? t('We tried our best, but we couldn’t find any data.')
            : updationFailed
            ? t('Your verification is not completed please try again.')
            : t('')}
        </StyledDescription>
      </div>
      <DivBottom>
        <Button className="m-auto" onClick={onClickTry}>
          {t('Try Again')}
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

export default KycDetailsError;
