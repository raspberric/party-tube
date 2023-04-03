import React from 'react';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import { StyledIconButton, IconTooltip } from '../../../../utils/utils';

function NotificationsButton({ setAnchorNotificationsButton }) {
  return (
    <IconTooltip title="Notifications">
      <StyledIconButton
        onClick={(event) => setAnchorNotificationsButton(event.currentTarget)}
      >
        <NotificationsNoneSharpIcon />
      </StyledIconButton>
    </IconTooltip>
  );
}

export default NotificationsButton;
