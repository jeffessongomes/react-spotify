import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 400px;

  background: #000;

  div{
    svg{
      fill: #FFF;
      width: 150px;
    }
  }
`;

export const ExterLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  padding: 20px 20px;

  div{
    display: flex;
    flex-direction: column;

    padding: 0 40px;

    h3{
      color: ${props => props.theme.colors.subtitle};
      font-size: 0.7em;
      letter-spacing: 3px;

      margin-bottom: 22px;
    }

    a{
      color: ${props => props.theme.colors.text};
      text-decoration: none;

      & + a{
        margin-top: 20px;
      }

      &:hover{
        color: ${props => props.theme.colors.textHover};
      }
    }
  }
`;

export const SocialLinks = styled.div`

`
