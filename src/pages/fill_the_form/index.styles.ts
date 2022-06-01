import styled from '@emotion/styled';

export const DivMain = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  .button-container {
    width: 100%;
    margin-top: 48px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sd-container {
    position: relative;
    // float: left;
  }

  .sd {
    padding: 5px 10px;
    height: 30px;
    width: 150px;
  }

  .open-button {
    position: absolute;
    top: 20px;
    right: 11px;
    width: 25px;
    height: 25px;
    background: #fff;
    pointer-events: none;
  }

  .open-button button {
    border: none;
    background: transparent;
  }
  .text {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #000000;

    opacity: 0.8;
  }
  .text::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #121212;

    opacity: 0.6;
  }
`;
export const FooterButtonStyle = styled.div`
  margin-top: 2%;
`;
