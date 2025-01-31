import * as React from 'react';
import './FireContainer.scss'

export const FireContainer: React.FC = () => {
    return (
        <div className="fire-container">
            <img className="fire svg-dark"
                 src="/assets/images/vector/fire_in_round.svg" alt=""/>
            <img className="fire svg-dark"
                 src="/assets/images/vector/fire_in_rectangular.svg" alt=""/>
            <img className="fire svg-dark"
                 src="/assets/images/vector/fire_in_rectangular.svg" alt=""/>
            <img className="fire svg-dark"
                 src="/assets/images/vector/fire_in_round.svg" alt=""/>
        </div>
    )
}