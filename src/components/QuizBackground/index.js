import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  
  background-color: ${({ theme }) => theme.colors.mainBg};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  
  flex: 1;

  @media screen and (max-width: 500px) {
    background-image: none;
    
    &:after {
      content: "";
      
      width: 100%;
      height: 210px;
      
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      
      z-index: 1;

      display: block;
    }
    *:first-child {
      position: relative;
      
      z-index: 10;
    }
  }
`;

export default QuizBackground;
