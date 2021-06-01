import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import axios from "axios";
import { useCookies } from "react-cookie";

function LogIn() {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState(undefined);
    const [cookies, setCookie] = useCookies(['user-token']);

    function updateCredentials(e) {
        e.preventDefault();
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    function submitLogIn(e) {
        e.preventDefault();

        axios.post('https://firefighter-2376.instashop.ae/api/users/login',
            {username: credentials.username, password: credentials.password}).then(res => {

            console.log(res);
            setCookie('user-token', res.data, { path: '/' });
        }).catch(err => {
            if (err.response.status === 400) {
                setErrorMessage("Invalid username or password")
            } else {
                setErrorMessage("Internal error - Check back later")
            }
        })
    }

    useEffect(() => {
        if(cookies.hasOwnProperty('user-token')){
            window.location.href = '/firefighter-blog';
        }
    }, [cookies]);

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
            <div>
                <div className={`loginErrorMessage ${(errorMessage !== undefined && "enter")}`}>
                    {errorMessage}
                </div>
            </div>
        </>
    )
}

export default LogIn;