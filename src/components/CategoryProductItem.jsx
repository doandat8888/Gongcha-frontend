import { useEffect, useState } from "react";
import React from "react";
import productService from "../services/productService";
import ProductByCategoryList from "./ProductByCategoryList";

const CategoryProductItem = (props) => {
    let {typeOfTea} = props;
    let [productsByCategory, setProductsByCategory] = useState([]);

    useEffect(() => {
        getProductsByCategory(typeOfTea.id);
    }, [typeOfTea.id]);

    const getProductsByCategory = async(categoryId) => {
        let response = await productService.getProductsByCategoryId(categoryId);
        if(response && response.data.length > 0) {
            setProductsByCategory(response.data);
        }
    }

    return (
        <div className="category-product-item">
            <div className="category-name">
                {typeOfTea.name}
            </div>
            <div className="product-list">
                {productsByCategory && productsByCategory.length > 0 ? 
                <ProductByCategoryList productsByCategory={productsByCategory}/> : 'Danh mục này hiện chưa có sản phẩm nào'}
                
            </div>
        </div>
    )
}

export default CategoryProductItem;