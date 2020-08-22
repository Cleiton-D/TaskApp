import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiXCircle } from 'react-icons/fi';

import ActionButton from '../../components/ActionButton';
import Button from '../../components/Button';

import { Container, Content, TaskList } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleDelete = useCallback((event: React.MouseEvent) => {
    console.log(event.target);
  }, []);

  const handleNewTask = useCallback(() => {
    history.push('new');
  }, [history]);

  return (
    <Container>
      <Content>
        <Button color="#28a745" onClick={handleNewTask}>
          Insert Task
        </Button>
        <h1>Task List</h1>
        <TaskList>
          <li>
            <strong>Task 1</strong>
            <div>
              <ActionButton icon={FiXCircle} onClick={handleDelete} />
            </div>
          </li>
        </TaskList>
      </Content>
    </Container>
  );
};

export default Dashboard;
