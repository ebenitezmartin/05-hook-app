import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    {/* Si incluimos una ruta con un simple / y la colocamos la primera, va a entrar siempre por ahi, pongamos despues lo que pongamos */}
                    {/* Para evitarlo, o la colocamos al final o ponemos exact */}
                    <Route exact path="/" component={ HomeScreen }/>
                    <Route exact path="/about" component={ AboutScreen }/>                    
                    <Route exact path="/login" component={ LoginScreen }/>
                </Switch>
            </div>
        </Router>
    )
}
