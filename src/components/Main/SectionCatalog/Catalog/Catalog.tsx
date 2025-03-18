import * as React from 'react';
import './Catalog.scss'
import {ProductCard} from "./ProductCard/ProductCard.tsx";

export const Catalog: React.FC = () => {
    return (
        <div className="catalog">
            <ProductCard name={"LIGHT ROAST BLEND"}
                         info={"tangy and tingly"}
                         srcSet={{
                             large: "/assets/images/large/product_card_LIGHT_ROAST_BLEND_large.png",
                             medium: "/assets/images/medium/product_card_LIGHT_ROAST_BLEND_medium.png"
                         }}/>
            <ProductCard name={"UJJO SAMPLER PACK"}
                         info={"light & dark roast"}
                         srcSet={{
                             large: "/assets/images/large/product_card_UJJO_SAMPLER_PACK_large.png",
                             medium: "/assets/images/medium/product_card_UJJO_SAMPLER_PACK_medium.png"
                         }}/>
            <ProductCard name={"DARK ROAST BLEND"}
                         info={"tangy and tingly"}
                         srcSet={{
                             large: "/assets/images/large/product_card_DARK_ROAST_BLEND_large.png",
                             medium: "/assets/images/medium/product_card_DARK_ROAST_BLEND_medium.png"
                         }}/>
        </div>
    )
}