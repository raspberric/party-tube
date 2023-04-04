import { Button, Paper, TextField, Typography } from '@mui/material';
import styled from 'styled-components';

export const App: React.FC = () => {
  return (
    <AppWrapper>
      <HomeScreen></HomeScreen>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const HomeScreen: React.FC = () => {
  return (
    <HomeScreenWrapper>
      <TextField label="Enter your nickname" variant="outlined" />
      <StyledWhatAreYou />
      <StyledButton variant="contained">Host</StyledButton>
      <StyledButton variant="contained" color="secondary">
        Guest
      </StyledButton>
    </HomeScreenWrapper>
  );
};

const WhatAreYou: React.FC<{ className?: string }> = ({ className }) => (
  <Typography className={className}>What are you?</Typography>
);
const StyledWhatAreYou = styled(WhatAreYou)`
  font-size: 2em;
`;

const StyledButton = styled(Button)`
  height: 50px;
`;

const HomeScreenWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  margin: 20px;

  ${StyledWhatAreYou} {
    margin-top: 60px;
    margin-bottom: 30px;
  }
  ${StyledButton} {
    margin: 20px 0;
  }
`;
