import React from "react";
import Header from "./components/Header/Header.jsx";
import MobileFooter from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import { useIsMobileView } from "./utils/utils.jsx";
import "./App.css";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

function YoutubeApp() {
  const isMobileView = useIsMobileView();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Main />
          {isMobileView && <MobileFooter />}
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default YoutubeApp;
