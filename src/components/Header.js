import React, {useState} from "react";
import {ReactComponent as HeaderIcon} from "../media/fire.svg";
import {Link} from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";

function Header() {

    const [menuActive, setMenuActive] = useState(false);
    const [cookies, , removeCookies] = useCookies(['user-token']);

    const toggleMenuActive = () => {
        setMenuActive(!menuActive);
    };

    function LoginButton() {
        return (
            <Link to="/firefighter-blog/login">
                <div className="button menuItem">
                    Log in
                </div>
            </Link>
        )
    }

    function LogoutButton() {

        const logOut = () => {
            axios.get("https://firefighter-2376.instashop.ae/api/users/logout").then(res => {
                if(res.response.status === 200){
                    removeCookies('user-token', '/')
                }
            }).catch(err => {
                if (err.response.status === 401){
                    console.log("Missing or invalid session token")
                }
            });
        };

        return (
            <div className="button menuItem" onClick={logOut}>
                Log out
            </div>
        )
    }

    return (
        <div className="headerContainer">
            <Link to="/firefighter-blog">
                <div className="headerIconTitle">
                    <HeaderIcon className="headerIcon"/>
                    <div className="headerTitle">Firefighter's Blog</div>
                </div>
            </Link>
            <div>
                <div className="hamburger" onClick={toggleMenuActive}>
                    <svg viewBox="0 0 100 80" width="30" height="30">
                        <rect width="100" height="20" rx="8"/>
                        <rect y="30" width="100" height="20" rx="8"/>
                        <rect y="60" width="100" height="20" rx="8"/>
                    </svg>
                </div>


            </div>
            <div className={(menuActive ? "headerMenuActivated" : "headerMenu")}>
                {cookies.hasOwnProperty('user-token') ? <LogoutButton/> : <LoginButton/>}
            </div>
        </div>
    )
}

export default Header;