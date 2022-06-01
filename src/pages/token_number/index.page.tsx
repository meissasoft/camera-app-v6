import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';

import { DivMain, TokenHeading, TokenNumberDiv, TokenDescription, TitleDiv, EstimatedTimeDiv } from './index.style';

const TokenNumber = () => {
  const { t } = useTranslation('token_number');

  const handleBack = () => {
    router.push('/keeps_things_handy');
  };

  const handleContinue = () => {
    router.push('/reshedule');
  };

  return (
    <DivMain>
      <div>
        <TokenHeading>
          <Heading text={t('your_token_number')} onClick={handleBack} />
        </TokenHeading>

        <div className="mt-5 text-center">
          <TokenNumberDiv>25</TokenNumberDiv>
          <TokenDescription>{t('request_you_to_wait_for_till_your_token_number_is_zero.')}</TokenDescription>
        </div>
        <hr />
        <div className="mt-5 text-center">
          <TitleDiv>{t('your_estimated_wait_time')}</TitleDiv>
          <EstimatedTimeDiv>00:45:30</EstimatedTimeDiv>
          <TokenDescription>
            {t(
              'as_all_our_agents_are_busy_at_this_moment_we_recommend_you_to_wait_patiently_and_come_back_after_sometime '
            )}
          </TokenDescription>
        </div>
      </div>
      <Button onClick={handleContinue} className="my-5 m-auto">
        {t('book_a_slot')}
      </Button>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['token_number'])),
  },
});

export default TokenNumber;
