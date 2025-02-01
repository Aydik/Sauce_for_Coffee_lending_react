import * as React from "react";
import {LogoProps} from './Logo.interface.ts'

export const Logo: React.FC<LogoProps> = ({logoSrc}: LogoProps) => {
    return (
        <a className="logo" href="#">
            <img src={logoSrc} alt="home"/>
        </a>
    )
}