import React, { useCallback, useRef, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const NewTask: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const history = useHistory();

  const handleSave = useCallback(
    async (event: MouseEvent) => {
      event.preventDefault();
      if (!formRef.current) return;

      const formData = new FormData(formRef.current);
      const data: { [key: string]: any } = {};

      formData.forEach((value, key) => (data[key] = value));

      await fetch('http://127.0.0.1:3333/tasks', {
        body: JSON.stringify(data),
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });

      history.push('/');
    },
    [history]
  );

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
