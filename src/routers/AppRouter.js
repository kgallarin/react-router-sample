import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../components/Home.js';
import Contact from '../components/Contact.js';
import Portfolio from '../components/Portfolio.js';
import Portfolios from '../components/Portfolios.js';
import NotFoundPage from '../components/404.js';
import Header from '../components/Header.js';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/portfolio" component={Portfolio} exact={true} />
                <Route path="/portfolio/:id" component={Portfolios} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;