import React, { useRef, useCallback, MouseEvent } from 'react';

import { Container, Content } from './styles';

type DetailModalProps = {
  close(): void;
};

const DetailModal: React.FC<DetailModalProps> = ({ close }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current) {
        const eventTarget = event.target as Node;

        if (!modalRef.current.contains(eventTarget)) {
          close();
        }
      }
    },
    [close]
  );

  return (
    <Container onClick={handleClick}>
      <Content ref={modalRef}>
        <strong>Task Detail</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Content>
    </Container>
  );
};

export default DetailModal;
