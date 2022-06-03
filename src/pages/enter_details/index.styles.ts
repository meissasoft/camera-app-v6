import styled from '@emotion/styled';
import { Form } from 'formik';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  margin: 20px 20px 0px 20px;
  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 20px);
`;

export const DivDateField = styled.div`
  position: relative;
`;

export const DivDateSpan = styled.span`
  position: absolute;
  top: 20px;
  right: 11px;
  width: 25px;
  height: 25px;
  background: ${COLORS.WHITE};
  pointer-events: none;
`;

export const DivDateCalendarIcon = styled.button`
  border: none;
  background: transparent;
`;

export const FooterButtonStyle = styled.div`
  margin-top: 20px;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
`;
