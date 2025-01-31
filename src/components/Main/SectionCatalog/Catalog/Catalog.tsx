import * as React from 'react';
import './Catalog.scss'
import {ProductCard} from "./ProductCard/ProductCard.tsx";

export const Catalog: React.FC = () => {
    return (
        <div className="catalog">
            <ProductCard name={"LIGHT ROAST BLEND"}
                         info={"tangy and tingly"}
                         srcSet={{
                             large: "/assets/images/large/product_card_photo_1_large.png",
                             medium: "/assets/images/medium/product_card_photo_1_medium.png"
                         }}/>
            <ProductCard name={"UJJO SAMPLER PACK"}
                         info={"light & dark roast"}
                         srcSet={{
                             large: "/assets/images/large/product_card_photo_2_large.png",
                             medium: "/assets/images/medium/product_card_photo_2_medium.png"
                         }}/>
            <ProductCard name={"DARK ROAST BLEND"}
                         info={"tangy and tingly"}
                         srcSet={{
                             large: "/assets/images/large/product_card_photo_3_large.png",
                             medium: "/assets/images/medium/product_card_photo_3_medium.png"
                         }}/>
        </div>
    )
}