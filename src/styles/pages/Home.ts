import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 90vh;

  h1{
    font-size: 9em;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    text-align: center;
    padding: 0 600px;
    line-height: 170px;

    color: ${(props) => props.theme.colors.textHover};
  }

  p{
    font-size: 1em;
    color: ${props => props.theme.colors.textHover};
    margin-top: 20px;
  }

  a{
    background: ${props => props.theme.colors.textHover};
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 1em;

    color: ${props => props.theme.colors.background};
    text-decoration: none;
    font-weight: bold;
  }

`;
