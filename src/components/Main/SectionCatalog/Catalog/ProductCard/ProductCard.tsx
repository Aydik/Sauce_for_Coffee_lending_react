import * as React from 'react';
import './ProductCard.scss'

interface ProductCardProps {
    name: string;
    info: string;
    srcSet: {
        large: string;
        medium: string;
    }
}

export const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
    const {name, info, srcSet} = props;
    return (
        <div className="product-card">
            <div className="background">
                <img className="background-image"
                     src="/assets/images/vector/product_card_background.png" alt=""/>
            </div>
            <div className="product">
                <p className="product-info">{info}</p>
                <p className="product-name">{name}</p>
                <picture className="product-photo">
                    <source media="(min-width: 1440px)"
                            srcSet={srcSet.large}/>
                    <img src={srcSet.medium}
                         alt={name}/>
                </picture>
            </div>
        </div>
    )
}