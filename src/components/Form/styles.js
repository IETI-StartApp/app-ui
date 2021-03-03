import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 13px;
  align-items: self-start;
  width: 350px;
  @media all and (max-width: 750px) {
    width: auto;
  }
`;
export const TextArea = styled.div`
  float: left;
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #4A5568;
  padding: 11px 0;
`;

export const InputArea = styled.div`
  @media all and (max-width: 750px) {
    width: auto;
  }
`;

export const FooterWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-rows: auto;
`;

export const CheckBoxArea = styled.div`
  grid-row: 1 / 2;
  display: flex;
  align-items: stretch;
`;

export const ForgotPasswdArea = styled.div`
  display: grid;
  text-align: center;
  grid-row: 1 / 2;
`;
