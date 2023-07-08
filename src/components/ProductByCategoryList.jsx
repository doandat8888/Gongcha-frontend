import React, { useState } from "react";
import ProductByCategoryItem from "./ProductByCategoryItem";
import ProductDetail from "../pages/ProductDetail";

const ProductByCategoryList = (props) => {
    let {productsByCategory} = props;
    

    return (
        <div className="product-by-category-list">
            {productsByCategory.map((productByCategory, index) => {
                return (
                    <ProductByCategoryItem key={index} productByCategory={productByCategory} />
                )
            })}
            
        </div>
    )
}

export default ProductByCategoryList;