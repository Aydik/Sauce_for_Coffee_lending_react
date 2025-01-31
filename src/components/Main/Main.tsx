import * as React from "react";
import {SectionBanner} from './SectionBanner/SectionBanner.tsx'
import './Main.scss'
import {SloganWithScorpions} from "./SloganWithScorpions/SloganWithScorpions.tsx";
import {SectionCatalog} from "./SectionCatalog/SectionCatalog.tsx";
import {Marque} from "./Marque/Marque.tsx";
import {Banner} from "./Banner/Banner.tsx";
import {SectionHistory} from "./SectionHistory/SectionHistory.tsx";
import {PreFooter} from "./PreFooter/PreFooter.tsx";

export const Main: React.FC = () => {
    return (
        <>
            <main className="main">
                <SectionBanner/>
                <SloganWithScorpions/>
                <SectionCatalog/>
                <Marque isBordered={true}/>
                <Banner srcSet={{
                    large:"/assets/images/large/syrup_in_cup_large.jpg",
                    medium:"/assets/images/medium/syrup_in_cup_medium.jpg",
                    small:"/assets/images/small/syrup_in_cup_small.jpg"
                }} alt={"syrup in cup"} isBordered={true}/>
                <SectionHistory/>
                <PreFooter/>
            </main>
        </>
    )
}