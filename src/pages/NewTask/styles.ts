import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;

  h1 {
    margin-bottom: 15px;
  }

  form > button {
    position: relative;
    left: 100%;
    transform: translateX(-100%);
  }
`;
