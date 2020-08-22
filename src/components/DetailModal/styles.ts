import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;
  height: 300px;
  padding: 10px 25px 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);

  background-color: #f1f1f1;
  color: #333;

  > strong {
    display: inline-block;
    font-size: 22px;
    margin-bottom: 15px;
  }

  > p {
    line-height: 22px;
  }
`;
