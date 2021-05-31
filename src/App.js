import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Page Imports
import Home from "./pages/Home";
import Post from "./pages/Post";
import LogIn from "./pages/LogIn";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="page">
                <BrowserRouter>
                    <Switch>


                        <Route exact path="/" component={Home}/>
                        <Route exact path="/firefighter-blog" component={Home}/>

                        <Route exact path="/firefighter-blog/post/:id" component={Post}/>
                        <Route exact path="/firefighter-blog/login" component={LogIn}/>

                    </Switch>
                </BrowserRouter>
            </div>
            <Footer/>
        </>
    );
}

export default App;
