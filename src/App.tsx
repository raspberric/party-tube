import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { HomeScreen } from './pages/HomeScreen';
import { HostPage } from './pages/HostPage';

export const App: React.FC = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/host/:nickname" element={<HostPage />}></Route>
        <Route path="/guest" element={<HostPage />}></Route>
      </Routes>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
