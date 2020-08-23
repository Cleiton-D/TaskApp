import React from 'react';

import { Container } from './styles';

const NoAccess: React.FC = () => (
  <Container>
    <h1>Desculpe. Você não tem permissão para acessar esta página.</h1>
  </Container>
);

export default NoAccess;
