import * as React from "react";
import "./Slogan.scss";

export interface SloganProps {
    title: string;
    header: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Slogan: React.FC<SloganProps> = ({ title, header }) => {
    return (
        <div className="slogan">
            {(() => {
                switch (header) {
                    case "h1":
                        return <h1>{title}</h1>;
                    case "h2":
                        return <h2>{title}</h2>;
                    case "h3":
                        return <h3>{title}</h3>;
                    case "h4":
                        return <h4>{title}</h4>;
                    case "h5":
                        return <h5>{title}</h5>;
                    case "h6":
                        return <h6>{title}</h6>;
                    default:
                        return <h1>{title}</h1>;
                }
            })()}
        </div>
    );
};
