import React from 'react';
import './Styles/App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from './Components/NavBar'
import Header from './Components/Header'
import * as routes from './Commom/routes'
import Posts from './Views/Posts';
import Albuns from './Views/Albuns';
import Gallery from './Views/Gallery';
import ToDo from './Views/ToDo'

export default function Routes() {
    return (
        <BrowserRouter>
            <Nav />
            <Header />
            <Switch>
                <Route exact path={routes.POSTS} component={Posts} />
                <Route exact path={routes.TODOLIST} component={ToDo} />
                <Route exact path={routes.GALLERY} component={Gallery} />
                <Route exact path={routes.ALBUNS} component={Albuns} />
            </Switch>
        </BrowserRouter>
    );
}
