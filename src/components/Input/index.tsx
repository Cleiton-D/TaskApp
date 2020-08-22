import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

type ActionButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

const Input: React.FC<ActionButtonProps> = (props) => {
  return (
    <Container>
      <input {...props} />
    </Container>
  );
};

export default Input;
