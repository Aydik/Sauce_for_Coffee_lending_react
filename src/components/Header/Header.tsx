import {HeaderDesktop} from './HeaderDesktop/HeaderDesktop.tsx'
import {HeaderMobile} from './HeaderMobile/HeaderMobile.tsx'
import * as React from "react";

export const Header: React.FC = () => {
    return (
        <>
            <HeaderDesktop/>
            <HeaderMobile/>
        </>
    )
}