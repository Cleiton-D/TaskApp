import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiXCircle } from 'react-icons/fi';

import { useAccess } from '../../hooks/access';

import ActionButton from '../../components/ActionButton';
import Button from '../../components/Button';
import DetailModal from '../../components/DetailModal';

import { Container, Content, TaskList, Users, Header } from './styles';

type Task = {
  id: number;
  title: string;
  description: string;
};

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<number | null>(null);

  const { setPermissions } = useAccess();
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

  const handleUser = useCallback(
    (key: number) => {
      switch (key) {
        case 1:
          setPermissions(['001', '002']);
          break;

        case 2:
          setPermissions(['001']);
          break;

        default:
          setPermissions([]);
          break;
      }
    },
    [setPermissions]
  );

  return (
    <>
      <Container>
        <Content>
          <Users>
            <button type="button" onClick={() => handleUser(1)}>
              User 1
            </button>
            <button type="button" onClick={() => handleUser(2)}>
              User 2
            </button>
            <button type="button" onClick={() => handleUser(-1)}>
              Logout
            </button>
          </Users>

          <Header>
            <Button color="#28a745" onClick={handleNewTask} accessCode="001">
              Insert Task
            </Button>
            <h1>Task List</h1>
          </Header>

          <TaskList>
            {data.map((task) => (
              <li key={task.id}>
                <div onClick={() => handleOpenModal(task.id)}>
                  <strong>{task.title}</strong>
                </div>
                <div>
                  <ActionButton
                    accessCode="002"
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
