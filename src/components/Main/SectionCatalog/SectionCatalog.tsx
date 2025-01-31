import * as React from 'react';
import './SectionCatalog.scss'
import {Catalog} from "./Catalog/Catalog.tsx";
import {FireContainer} from "./FireContainer/FireContainer.tsx";

export const SectionCatalog: React.FC = () => {
    return (
        <section id="shop" className="section-catalog bordered">
            <div className="section-catalog_content">
                <FireContainer/>
                <Catalog/>
            </div>
        </section>
    )
}