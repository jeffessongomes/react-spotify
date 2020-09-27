import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 17px 380px;
  background: ${(props) => props.theme.colors.primary};

  a{
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;

    font-weight: bold;

    svg{
      fill: ${(props) => props.theme.colors.text};
      width: 120px;
    }
  }
  div{
    display: flex;
    ul{
      display: flex;

      list-style-type: none;
      padding: 0 20px;

      li{
        padding: 0 15px;

        a{
          font-size: 1em;

          &:hover{
            color: ${(props) => props.theme.colors.textHover};
          }
        }
      }

      &+ul{

        a{
          color: ${(props) => props.theme.colors.secondary};
          font-size: 1em;

          &:hover{
            color: ${(props) => props.theme.colors.textHover};
          }
        }
      }
    }
  }
`;
