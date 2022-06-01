import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  margin: 20px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-height: 720px) {
    height: calc(100vh - 60px);
  }
  @media (max-height: 670px) {
    height: calc(100vh - 40px);
  }
`;

export const TokenHeading = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const TokenNumberDiv = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  text-align: center;
  background: linear-gradient(180deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const TokenDescription = styled.div`
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;

export const TitleDiv = styled.div`
    margin-top: 20px; 
    font-weight: 600;
    font-size: 20px;
    text-align: center,
    color: ${COLORS.BLACK_100},
`;

export const EstimatedTimeDiv = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  text-align: center;
  background: linear-gradient(180deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
