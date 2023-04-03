import React from 'react'
import styled from 'styled-components/macro'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

export const MobileAvatarMenuHeader = ({ onClick }) => {
  return (
    <MobileHeaderContainer square={true}>
      <CloseMobileMenuButton onClick={onClick} />
      <Typography>Account</Typography>
    </MobileHeaderContainer>
  )
}

const CloseMobileMenuButton = styled(CloseOutlinedIcon)`
  cursor: pointer;
  margin: 8px;
  margin-right: 32px;
`
const MobileHeaderContainer = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 6px 4px;
  min-height: 52px;
`
