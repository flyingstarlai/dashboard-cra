import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';

// Styles
// // Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// // Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// // Import Main styles for this application
import './styles/css/style.css'
// // Temp fix for reactstrap
import './styles/css/dropdown-menu-right.css'
// // Reducers
import reducers from './store/reducers'
// // Containers
import Main from './containers/Main/Main'

//Views
import Login from './views/Pages/Login'
import Page404 from './views/Pages/Page404'
import Page500 from './views/Pages/Page500'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route path="/login" name="Logn Page" component={Login} />
          <Route path="/404" name="Page 404" component={Page404} />
          <Route path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={Main}/>
        </Switch>
    </BrowserRouter>
  </Provider>
)
// // Views
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
