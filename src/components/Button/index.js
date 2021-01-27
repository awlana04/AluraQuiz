import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 10px 16px;

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
  
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 14px;
  font-weight: bold;
  
  line-height: 1;
  text-transform: uppercase;

  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  outline: 0;

  transition: .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #979797;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
