import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { StyledIconButton, IconTooltip } from '../../../../utils/utils';

function AppsIconButton({ setAnchorAppsButton }) {
  return (
    <IconTooltip title="YouTube Apps">
      <StyledIconButton
        onClick={(event) => setAnchorAppsButton(event.currentTarget)}
      >
        <AppsIcon />
      </StyledIconButton>
    </IconTooltip>
  );
}

export default AppsIconButton;
