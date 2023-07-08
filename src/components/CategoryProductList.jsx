import React from "react";
import CategoryProductItem from "./CategoryProductItem";

const CategoryProductList = (props) => {
    let {typesOfTea} = props;
    return (
        <ul className="category-product-list">
            {typesOfTea && typesOfTea.map((typeOfTea, index) => {
                return (
                    <CategoryProductItem typeOfTea={typeOfTea}/>
                )
            })}
        </ul>
        
    )
}

export default CategoryProductList;