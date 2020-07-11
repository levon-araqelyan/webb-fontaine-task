import React, {useContext} from "react"
import s from "./Header.module.scss"
import {Link, useHistory} from "react-router-dom"
import logo from "../../imges/logo.svg";
import {Context} from "../../context/Context";

const Header = () => {
    const history = useHistory();
    const {removeRole} = useContext(Context);

    const handleLogOutClick = () => {
        removeRole("");
    };
    return (
        <div className={s.header}>
            <img src={logo} onClick={() => history.push("/")} title="Home" alt={"#"}/>
            <Link onClick={handleLogOutClick} to="/login">
                Logout
            </Link>
        </div>
    )
};

export default Header