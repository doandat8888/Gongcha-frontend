import React from "react";
import images from "../constants/images";

const CategoryItem = (props) => {

    let {typeOfTea} = props;

    return (
        <li className="category-item">
            <img src={images.cupIcon} alt="" className="category-item-icon"/>
            <div className="category-item-name">{typeOfTea.name}</div>
        </li>  
    )
}

export default CategoryItem;