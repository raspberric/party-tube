import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { HomeScreen } from './pages/HomeScreen';

export const App: React.FC = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
