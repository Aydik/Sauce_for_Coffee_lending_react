import * as React from "react";
import './Marque.scss'
import {MarqueElement} from "./MarqueElement/MarqueElement.tsx";

export const Marque: React.FC = () => {
    return (
        <div className="marque">
            <div className="marque_content">
                <span className="item-collection">
                    <MarqueElement/>
                    <MarqueElement/>
                    <MarqueElement/>
                    <MarqueElement/>
                    <MarqueElement/>
                    <MarqueElement/>
                </span>
            </div>
        </div>
    )
}