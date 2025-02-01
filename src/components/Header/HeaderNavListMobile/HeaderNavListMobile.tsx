import * as React from "react";
import './HeaderNavListMobile.scss'
import {NavLink} from "../NavLink/NavLink.tsx";

export const HeaderNavListMobile: React.FC = () => {
    return (
        <div className="header_ul-container">
            <ul className="header_ul">
                <li>
                    <NavLink title={"Story"} href={"#story"}/>
                </li>
                <li>
                    <NavLink title={"Shop"} href={"#shop"}/>
                </li>
                <li>
                    <NavLink title={"Contact"} href={"#contact"}/>
                </li>
                <li>
                    <NavLink title={"Wholesale"} href={"#"}/>
                </li>
            </ul>
        </div>
    )
}