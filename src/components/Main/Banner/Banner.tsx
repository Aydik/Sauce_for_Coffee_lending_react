import * as React from "react";
import './Banner.scss'

export interface BannerProps {
    srcSet: {
        large: string;
        medium: string;
        small: string;
    }
    alt: string
    isBordered?: boolean;
    withPadding?: boolean;
}

export const Banner: React.FC<BannerProps> = (
    {
        srcSet,
        alt,
        isBordered = false,
        withPadding = true
    }: BannerProps) => {
    return (
        <div className={`banner${isBordered ? " bordered" : ""}${withPadding ? " banner-with-padding" : ""}`}>
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