import React, {
  useRef,
  useCallback,
  MouseEvent,
  useState,
  useEffect,
} from 'react';

import { Container, Content } from './styles';

type DetailModalProps = {
  close(): void;
  task: number;
};

type Task = {
  id: number;
  title: string;
  description: string;
};

const DetailModal: React.FC<DetailModalProps> = ({ close, task }) => {
  const [data, setData] = useState<Task>();

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadTask() {
      const response = await fetch(`http://127.0.0.1:3333/tasks/${task}`);
      const result = await response.json();
      setData(result);
    }

    loadTask();
  }, [task]);

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
        <strong>{data ? data.title : 'Task Title'}</strong>
        <p>{data?.description}</p>
      </Content>
    </Container>
  );
};

export default DetailModal;
