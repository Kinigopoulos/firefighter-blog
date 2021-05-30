import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Page Imports
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
