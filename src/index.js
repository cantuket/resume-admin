import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AUTH_USER } from './actions/types'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { PrivateRoute } from './components/auth/require_auth'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {AnimatedSwitch } from 'react-router-transition';
// Needed for onTouchTap with material-ui http://stackoverflow.com/a/34015469/988941
import {Col, Row} from 'react-grid-system';

import Header from './components/header'
import Signin from './components/auth/signin'
import Signout from './components/auth/signout'
import Signup from './components/auth/signup'

import Experience from './components/Resume/Experience'
import EditExperience from './components/Resume/Experience/Edit'

injectTapEventPlugin()
const store = createStore(reducers,composeWithDevTools(
    applyMiddleware(reduxThunk)   
));
const token = localStorage.getItem('token')
if (token) {
  store.dispatch({type: AUTH_USER})
}

const muiTheme = getMuiTheme({
    "palette": {
        // "primary1Color": "#7986cb",
        "primary1Color": "#000",
        "primary2Color": "#303f9f",
        "primary3Color": "#c5cae9",
        "accent1Color": "#80deea",
        "accent2Color": "#64b5f6",
        "secondaryTextColor": "#7986cb",
        "canvasColor": "#e3f2fd",
        "alternateTextColor": "#ffffff",
        "disabledColor": "rgba(0, 0, 0, 0.12)"
    }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider 
      muiTheme={muiTheme}
      >
        <div>
          <Header currentLocation={location}/>
          
          <div  style={{paddingLeft:'150px'}} className="body">
            <div className="row">
              <div className="col  m10 offset-m1">
                <PrivateRoute path="/admin" exact={true} component={Experience}/>
                <Route path="/admin/signin" component={Signin}/>
                <Route path="/admin/signout" component={Signout}/>
                <PrivateRoute path="/admin/signup" component={Signup}/>
          
                {/* Private */}
                <PrivateRoute path="/admin/experience" exact={true} component={Experience}/>
                <PrivateRoute path="/admin/experience/:experienceId" exact={true} component={EditExperience}/>
                

              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
  , document.getElementById('root'))
