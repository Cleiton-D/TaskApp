import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
};

const Button: React.FC<ActionButtonProps> = ({ children, color, ...rest }) => {
  return (
    <Container backgroundColor={color} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
