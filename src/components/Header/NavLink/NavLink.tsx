import './NavLink.scss'
import * as React from "react";
import {NavLinkProps} from './NavLink.interface.ts';

export const NavLink: React.FC<NavLinkProps> = (props: NavLinkProps) => {
    const {title, href} = props;
    return (
        <a className="nav-link" href={href}>
            <p className="nav-link-text">{title}</p></a>
    )
}