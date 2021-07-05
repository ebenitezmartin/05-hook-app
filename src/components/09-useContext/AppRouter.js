import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter
  } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>

                <Switch>
                    <BrowserRouter path="/about" 
                    component={ AboutScreen }/>
                </Switch>

            </div>
        </BrowserRouter>
    )
}
