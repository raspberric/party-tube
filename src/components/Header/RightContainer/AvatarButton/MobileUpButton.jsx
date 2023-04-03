import React from 'react';
import styled from 'styled-components/macro';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import Fab from '@mui/material/Fab';

export const MobileUpButton = ({ onClick }) => {
  return (
    <StyledFab onClick={onClick}>
      <ArrowUpwardOutlinedIcon style={{ fontSize: '20px' }} />
    </StyledFab>
  );
};

const StyledFab = styled(Fab)`
  && {
    position: fixed;
    top: 142px;
    right: 20px;
    background-color: #ff0000;
    color: white;
  }
`;
