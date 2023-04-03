import React from 'react'
import Header from './components/Header/Header.jsx'
import MobileFooter from './components/Footer/Footer.jsx'
import Main from './components/Main/Main.jsx'
import { useIsMobileView } from './utils/utils.jsx'
import './App.css'

function YoutubeApp() {
  const isMobileView = useIsMobileView()

  return (
    <div className="App">
      <Header />
      <Main />
      {isMobileView && <MobileFooter />}
    </div>
  )
}

export default YoutubeApp
