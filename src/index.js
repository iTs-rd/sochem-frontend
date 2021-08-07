import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Forum from './components/forum-home';
import Auth from './components/auth';
import Cloud from './components/cloud'
import Profile from './components/profile';
import Events from './components/events.jsx';
import Anevent from './components/anevent';
import People from './components/people';

document.body.style.zoom = 0.9;
const routing = (
  <BrowserRouter>
    <CookiesProvider>
      <Route exact path="/" component={App}/>
      <Route exact path="/forum" component={Forum}/>
      <Route exact path="/login" component={Auth}/>
      <Route exact path="/cloud" component={Cloud}/>
      <Route exact path="/events" component={Events}/>
      <Route exact path="/events/:title" component={Anevent}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/people" component={People}/>
    </CookiesProvider>
  </BrowserRouter>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
