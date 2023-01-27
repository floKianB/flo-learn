import React, { useContext } from 'react';
import './shop.styles.scss';

import ProductCard from '../../components/product-card/product-card.component';
import { ProductsContext } from '../../context/products.context';

function Shop() {
    const { products } = useContext(ProductsContext)
    return (
        <div className="products-container">
            {
                products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product}/>
                    );
                })
            }
        </div>
    )
}

export default Shop;