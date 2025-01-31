import * as React from "react";
import {SectionBanner} from './SectionBanner/SectionBanner.tsx'
import './Main.scss'
import {SloganWithScorpions} from "./SloganWithScorpions/SloganWithScorpions.tsx";
import {SectionCatalog} from "./SectionCatalog/SectionCatalog.tsx";

export const Main: React.FC = () => {
    return (
        <>
            <main className="main">
                <SectionBanner/>
                <SloganWithScorpions/>
                <SectionCatalog/>
            </main>
        </>
    )
}