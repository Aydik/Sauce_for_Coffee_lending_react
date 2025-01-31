import * as React from "react";
import './Banner.scss'

export interface BannerProps {
    srcSet: {
        large: string;
        medium: string;
        small: string;
    }
    alt: string
}

export const Banner: React.FC<BannerProps> = (props: BannerProps) => {
    const {srcSet, alt} = props;
    return (
        <div className="banner">
            <picture className="banner_picture">
                <source media="(min-width: 1440px)"
                        srcSet={srcSet.large}/>
                <source media="(min-width: 1024px)"
                        srcSet={srcSet.medium}/>
                <img src={srcSet.small}
                     alt={alt}/>
            </picture>
        </div>
    )
}