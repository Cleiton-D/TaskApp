import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentType<IconBaseProps>;
};

const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon size={22} color="#fff" />
    </Container>
  );
};

export default ActionButton;
