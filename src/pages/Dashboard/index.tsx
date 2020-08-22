import React, { useCallback } from 'react';
import { FiXCircle } from 'react-icons/fi';

import ActionButton from '../../components/ActionButton';

import { Container, Content, TaskList } from './styles';

const Dashboard: React.FC = () => {
  const handleDelete = useCallback((event: React.MouseEvent) => {
    console.log(event.target);
  }, []);

  return (
    <Container>
      <Content>
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
