import * as React from "react";
import './PreFooter.scss'
import {Marque} from "../Marque/Marque.tsx";
import {ForeignText} from "../ForeignText/ForeignText.tsx";

export const PreFooter: React.FC = () => {
    return (
        <div className="pre-footer">
            <Marque isBordered={true}/>
            <div className="pre-footer_content bordered">
                <img className="background"
                     src="src/assets/images/vector/big_fire.svg" alt=""/>
                <img className="frame svg-dark"
                     src="src/assets/images/vector/bottom_frame.svg" alt=""/>
                <ForeignText/>
            </div>
        </div>
    )
}