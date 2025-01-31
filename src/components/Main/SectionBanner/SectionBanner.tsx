import * as React from "react";
import './SectionBanner.scss'
import {Marque} from "../Marque/Marque.tsx";
import {ForeignText} from "../ForeignText/ForeignText.tsx";
import {Banner} from "../Banner/Banner.tsx";
import {Slogan} from "../Slogan/Slogan.tsx";

export const SectionBanner: React.FC = () => {
    return (
        <section className="section-banner bordered">
            <div className="section-banner_component">
                <ForeignText/>
                <Marque/>
                <Banner srcSet={{
                    large:"/assets/images/large/syrup_around_cups_large.jpg",
                    medium:"/assets/images/medium/syrup_around_cups_medium.jpg",
                    small:"/assets/images/small/syrup_around_cups_small.jpg"
                }}
                        alt={"syrup around cups small"}/>
            </div>
            <div className="section-banner_component">
                <Slogan title={"THE FIRST HOT SAUCE MADE FOR COFFEE"} header={"h1"}/>
                <Banner srcSet={{
                    large:"/assets/images/large/syrup_in_hand_large.jpg",
                    medium:"/assets/images/medium/syrup_in_hand_medium.jpg",
                    small:"/assets/images/small/syrup_in_hand_small.jpg"
                }}
                        alt={"syrup in hand"}/>
            </div>
        </section>
    )
}