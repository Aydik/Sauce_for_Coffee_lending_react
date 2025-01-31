import * as React from "react";
import './Marque.scss'
import {MarqueElement} from "./MarqueElement/MarqueElement.tsx";

export interface MarqueProps {
    isBordered?: boolean;
}

export const Marque: React.FC<MarqueProps> = ({isBordered = false}: MarqueProps) => {
    return (
        <div className={`marque${isBordered ? " bordered" : ""}`}>
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