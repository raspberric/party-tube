import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from 'styled-components/macro';
import ListItemText from '@mui/material/ListItemText';
import { StyledMenuItem, StyledListItemIcon } from '../../../../utils/utils';

export const MenuRow = ({ Icon, text, arrow, onClick }) => {
  return (
    <MenuItem onClick={onClick}>
      <StyledListItemIcon>
        <Icon fontSize="small" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
      {arrow && <ChevronRightIcon style={{ fontSize: '20px' }} />}
    </MenuItem>
  );
};
const MenuItem = styled(StyledMenuItem)`
  && {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
