import React from 'react';
import {BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom"
import HomePage from '../layouts/HomePage';
import MyCVPage from '../layouts/MyCVPage';
import NavBar from '../components/NavBar';
function Routes(props) {
    return (
        <div>
            <Router>
                <Switch>                            
                    <Route path="/" exact element={<HomePage lan={props.lan} changeLan={props.changeLan}/>}/>
                    <Route path="/MyCVPage" exact element={<MyCVPage lan={props.lan} changeLan={props.changeLan}/>}/>
                </Switch>
            </Router>
            
        </div>
    );
}

export default Routes;