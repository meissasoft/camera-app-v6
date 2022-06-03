import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import { TextStyled } from './index.styles';

/**
 *
 * @returns bottom text video call
 */

const BottomText = () => {
  const { t } = useTranslation('initiated_video_call');
  const [text] = useState<string>(`${t('read_the_below_number_1_2_4_5')}`);
  return <TextStyled>{text}</TextStyled>;
};

export default BottomText;
