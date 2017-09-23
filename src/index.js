import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import Routes from "./routes";
import {indigo700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Todo from './components/Todo';
import data from "./utils/data";

import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
      primary1Color: indigo700
    }
});

// const { whyDidYouUpdate } = require("why-did-you-update")
// whyDidYouUpdate(React)
const renderRoot = (appRoutes) => {
  ReactDOM.render(
      <AppContainer>
        <MuiThemeProvider muiTheme={muiTheme}>
        <Routes />
        </MuiThemeProvider>
      </AppContainer>,
    document.getElementById("app")
  );
};
renderRoot(Routes);
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(["./routes"], () => {
    renderRoot(Routes);
  });

};




