import React, { useState } from "react";
import images from "../constants/images";
import { useNavigate } from "react-router-dom";

const ProductByCategoryItem = (props) => {
    let  {productByCategory} = props;
    const navigate = useNavigate();
    
    const viewProductDetail = () => {
        navigate(`/product-detail/${productByCategory.id}`)
    }

    return (
        <div className="product-by-category-item">
            <img src={productByCategory.img} alt="" className="product-img" />
            <div className="product-name">
                {productByCategory.name}
            </div>
            <div className="view-detail-btn" onClick={viewProductDetail}>
                <img src={images.viewDetailBtn} alt="" className="img" />
            </div>
        </div>
    )
}

export default ProductByCategoryItem;