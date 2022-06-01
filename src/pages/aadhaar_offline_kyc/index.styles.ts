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
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export const StepLayoutWrapper = styled.div`
  margin-top: 5px;
`;

export const DivForm = styled.div`
  margin-top: 50px;
  text-align: left;
`;
export const FooterButtonStyle = styled.div`
  margin-top: 2%;
`;
export const FormLabel = styled.h5`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${COLORS.BLACK_HEAVY};
`;
export const StyledSpan = styled.span`
  background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
  font-size: 18px;
}`;
export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
