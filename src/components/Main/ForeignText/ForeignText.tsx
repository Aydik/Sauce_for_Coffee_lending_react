import * as React from "react";
import './ForeignText.scss'

export const ForeignText: React.FC = () =>{
    return (
        <div className="foreign-text">
            <img className="ujjo" src="src/assets/images/vector/ujjo.svg" alt="Ujjo"/>
            <img className="white-label"
                 src="src/assets/images/vector/white_label.svg" alt=""/>
        </div>
    )
}