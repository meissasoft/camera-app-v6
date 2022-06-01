import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 40px);
  @media (max-height: 720px) {
    height: calc(100vh - 110px);
  }
  @media (max-height: 670px) {
    height: calc(100vh - 40px);
  }
`;
export const VerificationStyled = styled.div`
  padding: 20px 0px;
  list-group-item: list-group-item-action;
`;
export const VerificationCardStyled = styled.div`
  text-align: center;
  margin-top: 5px;
`;
export const VerificationSuccessfulTextStyled = styled.p`
  margin-top: 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 0px !important;
`;
export const VerificationSuccessfulSmallTextStyled = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 12px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
  margin-bottom: 0px !important;
`;
export const DivBottom = styled.div`
  width: 100%;
  margin-top: 20px;
`;
