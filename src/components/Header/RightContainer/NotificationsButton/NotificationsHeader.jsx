import React from 'react';
import styled from 'styled-components/macro';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { NOTIFICATION_MENU_TOP_HEIGHT } from '../../../../utils/utils';

export function NotificationsHeader({ onClick }) {
  return (
    <NotificationsMenuTop>
      <Typography>Notifications</Typography>
      <IconButton onClick={onClick} size="large">
        <SettingsOutlinedIcon />
      </IconButton>
    </NotificationsMenuTop>
  );
}
const NotificationsMenuTop = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${NOTIFICATION_MENU_TOP_HEIGHT}px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 16px;
  padding-right: 16px;
`;
