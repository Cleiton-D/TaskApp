import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiXCircle } from 'react-icons/fi';

import ActionButton from '../../components/ActionButton';
import Button from '../../components/Button';
import DetailModal from '../../components/DetailModal';

import { Container, Content, TaskList } from './styles';

type Task = {
  id: number;
  title: string;
  description: string;
};

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<number | null>(null);

  const history = useHistory();

  const loadTasks = useCallback(async () => {
    const response = await fetch('http://127.0.0.1:3333/tasks');
    const result = (await response.json()) as Task[];
    setData(result);
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleDelete = useCallback(
    async (id: number) => {
      await fetch(`http://127.0.0.1:3333/tasks/${id}`, { method: 'DELETE' });
      loadTasks();
    },
    [loadTasks]
  );

  const handleNewTask = useCallback(() => {
    history.push('new');
  }, [history]);

  const handleOpenModal = useCallback((id: number) => {
    setSelectedTask(id);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedTask(null);
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Button color="#28a745" onClick={handleNewTask}>
            Insert Task
          </Button>
          <h1>Task List</h1>
          <TaskList>
            {data.map((task) => (
              <li key={task.id}>
                <div onClick={() => handleOpenModal(task.id)}>
                  <strong>{task.title}</strong>
                </div>
                <div>
                  <ActionButton
                    icon={FiXCircle}
                    onClick={() => handleDelete(task.id)}
                  />
                </div>
              </li>
            ))}
          </TaskList>
        </Content>
      </Container>
      {selectedTask && (
        <DetailModal close={handleCloseModal} task={selectedTask} />
      )}
    </>
  );
};

export default Dashboard;
