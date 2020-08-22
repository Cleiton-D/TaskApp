import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

type ActionButtonProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
};

const TextArea: React.FC<ActionButtonProps> = (props) => {
  return (
    <Container>
      <textarea {...props} />
    </Container>
  );
};

export default TextArea;
