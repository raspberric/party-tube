import { Button, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
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
  const [nickname, setNickname] = useState('');

  return (
    <HomeScreenWrapper>
      <TextField
        onChange={(event) => setNickname(event.target.value)}
        label="Enter your nickname"
        variant="outlined"
      />
      <StyledWhatAreYou />
      <StyledButton disabled={!nickname} variant="contained">
        Host
      </StyledButton>
      <StyledButton disabled={!nickname} variant="contained" color="secondary">
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
  padding: 20px;

  ${StyledWhatAreYou} {
    margin-top: 60px;
    margin-bottom: 30px;
  }
  ${StyledButton} {
    margin: 20px 0;
  }
`;
