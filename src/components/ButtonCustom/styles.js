import styled from 'styled-components';

export const Wrapper = styled.button`
  background: ${props => {
    if (props.color === 'red') {
      return "#950740"
    } else if (props.color === 'grey') {
      return "#2D3748"
    }
  }};
  border-radius: 5px;
  border: 0 transparent;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  @media all and (max-width: 750px) {
    width: ${props=>
            props.widthFull? '100%' : 'fit-content'
    };
  }
  width: ${props=>
          props.widthFull? '100%' : 'fit-content'
  };

  cursor: pointer;
  box-sizing: border-box;
  padding: 0 20px;
  height: auto;
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 40px;
  color: #fafdfc;
`;
