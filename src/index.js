import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';

import Home from './pages/home'
import About from './pages/about'
import AndreLwoff from './pages/andre-lwoff'
import ClinicalStudies from './pages/clinical-studies'
import Product from './pages/product'
import WeizmannInstitute from "./pages/weizmann-institute";
import App from './App';
// import NoMatch from './pages/noMatch'

ReactDOM.render(
    <HashRouter>
        <Switch>
            <App>

                <Redirect exact from='/' to='/home' />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/lwoff" component={AndreLwoff} />
                <Route path="/studies" component={ClinicalStudies} />
                <Route path="/product" component={Product} />
                <Route path="/institute" component={WeizmannInstitute} />
                {/*<Route path="/404" component={NoMatch} />*/}
            </App>
        </Switch>
    </HashRouter>,
  document.getElementById('root')
);