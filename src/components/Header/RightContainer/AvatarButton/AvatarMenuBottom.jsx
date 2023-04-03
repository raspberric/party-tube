import React from 'react'
import ListItemText from '@mui/material/ListItemText'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { StyledMenuItem } from '../../../../utils/utils'

export const AvatarMenuBottom = ({ onClick }) => {
  return (
    <StyledMenuItem onClick={onClick}>
      <ListItemText>Restricted Mode: Off</ListItemText>
      <ChevronRightIcon style={{ fontSize: '20px' }} />
    </StyledMenuItem>
  )
}
