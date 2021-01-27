import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  background-color: ${({ theme }) => theme.colors.mainBg};

  border-radius: 4px;

  overflow: hidden;

  h1, h2, h3 {
    margin-bottom: 0;

    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }

  p  {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  padding: 18px 32px;

  background: ${({ theme }) => theme.colors.primary};
  
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    padding: 0;

    list-style: none;
  }
`;

Widget.Topic = styled.a`
  margin-bottom: 8px;
  padding: 10px 15px;

  cursor: pointer;
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};

  outline: 0;
  text-decoration: none;

  display: block;

  transition: .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;
