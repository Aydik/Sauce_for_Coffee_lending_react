import './HeaderDesktop.scss'
import {NavLink} from '../NavLink/NavLink.tsx'
import {Logo} from '../Logo/Logo.tsx'
import {Button} from '../../ui/Button/Button.tsx'
import * as React from "react";

export const HeaderDesktop: React.FC = () => {
    return (
        <header className="header header-desktop bordered container">
            <nav className="header_nav">
                <ul className="header_ul flex">
                    <li className="flex">
                        <Button title={"Go back"} classNames={["button-primary"]}/>
                        <NavLink title={"Story"} href={"#story"}/>
                        <NavLink title={"Shop"} href={"#shop"}/>
                    </li>
                    <li>
                        <Logo logoSrc={"assets/images/vector/logo.svg"}/>
                    </li>
                    <li className="flex">
                        <NavLink title={"Contact"} href={"#contact"}/>
                        <NavLink title={"Wholesale"} href={"#"}/>
                        <Button title={"Clone"} classNames={["button-primary"]}/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}