import './HeaderMobile.scss'
import * as React from "react";
import {Logo} from "../Logo/Logo.tsx";
import {HeaderUlMobile} from "../HeaderUlMobile/HeaderUlMobile.tsx";

export const HeaderMobile: React.FC = () => {
    return (
        <header className="header header-mobile">
            <nav className="nav header_nav bordered flex">
                <input type="checkbox" id="menu-toggle"/>
                <label htmlFor="menu-toggle" className="button button-primary button-menu">
                    <img className="img" src="/assets/images/vector/menu.svg" alt=""/></label>
                <HeaderUlMobile/>
                <Logo logoSrc={"/assets/images/vector/logo_mobile.svg"}/>
                <button className="button button-primary button-primary-users">
                    <img src="/assets/images/vector/users.svg" alt=""/>
                </button>
            </nav>
        </header>
    )
}