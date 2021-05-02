import styled from "styled-components";

export const NavButton = styled.div`
  & {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    color: #555;
    font-size: 15px;
    font-weight: 400;
    padding: 8px 2px;
    border-radius: 0;
    margin: 9px 20px 0 20px;
    background: none;
    border-color: transparent;
    cursor: pointer;
  }
  &:after{
    display: block;
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #950740 0%, #dc1a4e 100%);
    content: "";
    transition: width 0.2s;
  }
  
`;
