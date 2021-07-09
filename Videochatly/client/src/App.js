import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F4916D',
      main: '#F27649',
      dark: '#A95233',
      contrastText: '#FFF',
    },

    secondary: {
      light: '#F6685E',
      main: '#F44336',
      dark: '#AA2E25',
      contrastText: '#FFF',
    }
  }
});

const App = () => {
  return(
    <ThemeProvider theme={theme}>
        <div class="section">
          <div class="content">
            <div class="Logo"></div>
          </div>
        </div>

        <hr/>
        
        <div class="wrapper">
        <VideoPlayer />

        <Options>
          <Notifications />
        </Options>
        </div>
    </ThemeProvider>
  );
}

export default App;