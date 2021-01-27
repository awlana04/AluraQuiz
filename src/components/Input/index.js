import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  margin-bottom: 25px;
  padding: 15px;

  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 14px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  outline: 0;
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase onChange={onChange} placeholder={placeholder} {...props} />
    </div>
  );
}
