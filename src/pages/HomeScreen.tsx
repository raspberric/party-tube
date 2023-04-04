import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const HomeScreen: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  return (
    <HomeScreenWrapper>
      <TextField
        onChange={(event) => setNickname(event.target.value)}
        label="Enter your nickname"
        variant="outlined"
      />
      <StyledWhatAreYou />
      <StyledButton
        disabled={!nickname}
        onClick={() => navigate(`host/${nickname}`)}
        variant="contained"
      >
        Host
      </StyledButton>
      <StyledButton
        disabled={!nickname}
        onClick={() => navigate('guest')}
        variant="contained"
        color="secondary"
      >
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
