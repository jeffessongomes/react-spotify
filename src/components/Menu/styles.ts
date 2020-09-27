import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 17px 380px;

  a{
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;

    font-weight: bold;

    svg{
      fill: #FFF;
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
