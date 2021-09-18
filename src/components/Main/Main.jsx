import React from 'react'
import styled from 'styled-components'
import ChipsBar from '../ChipsBar/ChipsBar'
import Videos from '../Videos/Videos'
import {
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  MOBILE_VIEW_BREAKPOINT,
} from '../utils/utils'
import SidebarToShow from '../Sidebar/SidebarToShow'

const Main = () => {
  return (
    <StyledMain>
      <SidebarToShow />

      <ChipsBar />
      <Videos />
    </StyledMain>
  )
}

export default Main

const StyledMain = styled.div`
  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
    padding-top: ${MOBILE_VIEW_HEADER_HEIGHT}px;
  }
  padding-top: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
  min-height: 100vh;
  /* display: flex; */

  /* .main-right-container {
    width: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  } */
`
