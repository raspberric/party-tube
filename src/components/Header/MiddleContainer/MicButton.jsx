import React from 'react'
import MicIcon from '@mui/icons-material/Mic'
import { IconTooltip, StyledIconButton } from '../../../utils/utils'

export const MicButton = () => {
  return (
    <IconTooltip title="Search with your voice">
      <StyledIconButton>
        <MicIcon />
      </StyledIconButton>
    </IconTooltip>
  )
}
