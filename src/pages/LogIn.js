import React, {useState} from "react";
import Header from "../components/Header";
import axios from "axios";

function LogIn() {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    function updateCredentials(e) {
        e.preventDefault();
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    function submitLogIn(e) {
        e.preventDefault();
        
    }

    return (
        <>
            <Header/>
            <div className="loginContainer">
                <h1 className="centerText primaryText">Log in</h1>
                <div>
                    <h2>Username</h2>
                    <input type="username" name="username" onChange={updateCredentials}/>
                </div>
                <div>
                    <h2>Password</h2>
                    <input type="password" name="password" onChange={updateCredentials}/>
                </div>
                <div>
                    <div className="button" onClick={submitLogIn}>
                        Log in
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn;