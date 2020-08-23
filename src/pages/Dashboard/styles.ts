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

  > button {
    position: relative;
    left: 100%;
    transform: translateX(-100%);
  }
`;

export const TaskList = styled.ul`
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 60px;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.2);
    transition: transform 0.1s;

    & + li {
      margin-top: 20px;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.1);
      transform: translateY(1px) translateX(2px);
    }

    > div:first-child {
      display: flex;
      flex: 1;
      align-items: center;

      height: 100%;

      strong {
        font-size: 18px;
      }
    }
  }
`;
