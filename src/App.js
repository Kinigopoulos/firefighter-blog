import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Page Imports
import Home from "./pages/Home";
import Post from "./pages/Post";
import LogIn from "./pages/LogIn";
import Footer from "./components/Footer";
import {CookiesProvider} from "react-cookie";

function App() {
    return (
        <>
            <div className="page">
                <CookiesProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/firefighter-blog" component={Home}/>

                            <Route exact path="/firefighter-blog/post/:id" component={Post}/>
                            <Route exact path="/firefighter-blog/login" component={LogIn}/>
                        </Switch>
                    </BrowserRouter>
                </CookiesProvider>
            </div>
            <Footer/>
        </>
    );
}

export default App;
