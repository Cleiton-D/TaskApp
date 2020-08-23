import React, { ButtonHTMLAttributes } from 'react';

import { withAccess } from '../../hooks/access';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
};

const Button: React.FC<ButtonProps> = ({ children, color, ...rest }) => {
  return (
    <Container backgroundColor={color} {...rest}>
      {children}
    </Container>
  );
};

export default withAccess(Button);
