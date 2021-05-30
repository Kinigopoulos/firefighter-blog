import React from "react";
import {ReactComponent as HeaderIcon} from "../media/fire.svg";

function Header() {
    return (
        <div className="headerContainer">
            <div className="headerIconTitle">
                <HeaderIcon className="headerIcon"/>
                <span className="headerTitle">Firefighter's Blog</span>
            </div>
            <div className="button" onClick={() => console.log("click")}>
                Log in
            </div>
        </div>
    )
}

export default Header;