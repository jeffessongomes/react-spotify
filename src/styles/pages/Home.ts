import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  background: url('https://www.scdn.co/i/home/lieVariants/bursts.svg');
  background-size: 165%;
  background-position: 43% 0%;

  h1{
    font-size: 9em;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    text-align: center;
    padding: 0 550px;
    line-height: 170px;

    color: ${(props) => props.theme.colors.textHover};
  }

  p{
    font-size: 1.2em;
    color: ${props => props.theme.colors.textHover};
    margin-top: 20px;
  }

  a{
    background: ${props => props.theme.colors.textHover};
    padding: 15px 35px;
    border-radius: 40px;
    font-size: 0.9em;
    font-family: Roboto, sans-serif;
    margin-top: 30px;
    letter-spacing: 2px;

    color: ${props => props.theme.colors.background};
    text-decoration: none;
    font-weight: bold;
    transition: .5s;

    &:hover{
      background: #FFF;
    }

  }

`;
