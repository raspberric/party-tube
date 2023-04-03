import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { IconTooltip, StyledIconButton } from '../../../utils/utils'

export const SearchButton = ({ setIsSearchDrawerOpen }) => {
  return (
    <IconTooltip title="Search">
      <StyledIconButton onClick={() => setIsSearchDrawerOpen(true)}>
        <SearchIcon />
      </StyledIconButton>
    </IconTooltip>
  )
}