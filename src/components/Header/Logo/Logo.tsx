import * as React from "react";

export interface LogoProps {
    logoSrc: string;
}

export const Logo: React.FC<LogoProps> = ({logoSrc}: LogoProps) => {
    return (
        <a className="logo" href="#">
            <img src={logoSrc} alt="home"/>
        </a>
    )
}