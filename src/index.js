import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import App from './containers/App';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const Main = () => (
  <MuiThemeProvider>
  <div>
    <Header/>
    <App/>
    </div>

  </MuiThemeProvider>
);
ReactDOM.render(
  < Main/>,
  document.getElementById('root')
);

registerServiceWorker();
