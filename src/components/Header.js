import React, {useState} from "react";
import {ReactComponent as HeaderIcon} from "../media/fire.svg";
import {Link} from "react-router-dom";

function Header() {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenuActive = () => {
        setMenuActive(!menuActive);
    };

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
                <Link to="firefighter-blog/login">
                    <div className="button menuItem">
                        Log in
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;