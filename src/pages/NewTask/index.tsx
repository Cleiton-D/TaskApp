import React, { useCallback, useRef, MouseEvent } from 'react';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const NewTask: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSave = useCallback((event: MouseEvent) => {
    event.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    console.log(data);
  }, []);

  return (
    <Container>
      <Content>
        <h1>Insert Task</h1>
        <form ref={formRef}>
          <Input name="title" placeholder="Task name" />
          <TextArea name="description" placeholder="Description" />
          <Button type="submit" color="#28a745" onClick={handleSave}>
            Save task
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default NewTask;
