import * as React from 'react';
import './SectionHistory.scss'
import {Banner} from "../Banner/Banner.tsx";
import {Slogan} from "../Slogan/Slogan.tsx";
import {HistoryText} from "./HistoryText/HistoryText.tsx";

export const SectionHistory: React.FC = () => {
    return (
        <section id="story" className="section-history bordered">
            <div className="section-history_block">
                <Slogan title={"the story behind the sauce"} header={"h3"}/>
                <Banner srcSet={{
                    large:"/assets/images/large/syrup_creator_large.jpg",
                    medium:"/assets/images/large/syrup_creator_large.jpg",
                    small:"/assets/images/medium/syrup_creator_medium.jpg",
                }} alt={"syrup creator"} withPadding={false}/>
            </div>
            <div className="section-history_block">
                <img className="background-for-text" src="/assets/images/vector/background_for_text.svg"
                     alt=""/>
                <HistoryText/>
            </div>
        </section>
    )
}