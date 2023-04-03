import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import styled from 'styled-components/macro'
import { FooterIcons } from './FooterIcons'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'

const MobileFooter = () => {
  return (
    <HideFooterOnScroll>
      <FooterContainer showLabels={true}>
        <FooterIcons />
      </FooterContainer>
    </HideFooterOnScroll>
  )
}

export default MobileFooter

const FooterContainer = styled(BottomNavigation)`
  && {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw; // 100vw instead of % because Grid spacing adds width to the container
    height: 48px;
    overflow-x: hidden;
  }
  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
    padding-top: 8px;
  }
`
function HideFooterOnScroll({ children }) {
  const shouldShowFooter = !useScrollTrigger({
    threshold: 200,
  })

  return (
    <Slide in={shouldShowFooter} direction="up">
      {children}
    </Slide>
  )
}
