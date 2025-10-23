import React from 'react';
import styled from 'styled-components';
import Main from './components/main';

const Window = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
`;
const App = (): React.JSX.Element => {
  return (
    <Window>
      <Container>
        <Main />
      </Container>
    </Window>
  );
};
export default App;
