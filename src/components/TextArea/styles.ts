import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-bottom: 10px;

  &:focus-within {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  textarea {
    width: 100%;
    height: 200px;
    max-height: 350px;
    background-color: transparent;
    border: 0;
    color: #f1f1f1;
    font-weight: 500;

    &::placeholder {
      color: #999;
    }
  }
`;
