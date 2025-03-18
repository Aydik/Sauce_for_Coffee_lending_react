import * as React from "react";
import './MarqueElement.scss'

export const MarqueElement: React.FC = () => {
    return (
        <>
            <span className="marque-element_text">put some fire in your belly</span>
            <img className="marque-element_img svg-dark"
                 src="src/assets/images/vector/pepper.svg" alt=""/>
        </>
    )
}