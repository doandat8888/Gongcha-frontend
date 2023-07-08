import React from "react";
import images from "../constants/images";
import CategoryItem from "./CategoryItem";

const CategoryList = (props) => {

    let {typesOfTea} = props;

    return (
        <ul className="category-list">
            {typesOfTea && typesOfTea.length > 0 ? typesOfTea.map((typeOfTea, index) => {
                return (
                    <CategoryItem key={index} typeOfTea={typeOfTea}/>
                )
            }) : "Không tìm thấy dữ liệu"}
            
        </ul>
    )
}

export default CategoryList;