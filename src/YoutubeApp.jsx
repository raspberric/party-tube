import React from "react";
import Header from "./components/Header/Header.jsx";
import MobileFooter from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import { useIsMobileView } from "./utils/utils.jsx";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme();

function YoutubeApp() {
  const isMobileView = useIsMobileView();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Main />
        {isMobileView && <MobileFooter />}
      </div>
    </ThemeProvider>
  );
}

export default YoutubeApp;
