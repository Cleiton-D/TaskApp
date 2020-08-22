import styled from 'styled-components';
import { shade } from 'polished';

type ContainerProps = {
  backgroundColor?: string;
};

export const Container = styled.button<ContainerProps>`
  height: 40px;
  padding: 0 15px;
  border: 0;
  background-color: ${(props) => props.backgroundColor || '#007bff'};
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor
        ? shade(0.2, props.backgroundColor)
        : shade(0.2, '#007bff')};
  }
`;
