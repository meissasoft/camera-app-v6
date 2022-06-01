import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivCameraTextStyled = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
  background-color: ${COLORS.BLACK_100};
  width: 100%;
`;

export const CameraTextStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
`;
