import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import images from "../constants/images";
import categoryService from "../services/categoryService";
import CategoryList from "../components/CategoryList";
import CategoryProductList from "../components/CategoryProductList";
import Footer from "../components/Footer";

const Product = () => {

    const [typesOfTea, setTypesOfTea] = useState([]);

    useEffect(() => {
        getAllCategories();
    }, []);

    const getAllCategories = async () => {
        let response = await categoryService.getAllCategory();
        if(response) {
            setTypesOfTea(response.data);
        }
    }

    return (
        <div className="product-page">
            <Header />
            <div className="menu-banner">
                <div className="menu-banner-body">
                    <div className="menu-banner-title">Menu hiện tại</div>
                    <div className="menu-banner-content">Giới thiệu thức uống hấp dẫn và đa dạng từ Gong Cha</div>
                </div>
            </div>
            <div className="product-page-body">
                <div className="category">
                    <CategoryList typesOfTea={typesOfTea}/>
                    <CategoryProductList typesOfTea={typesOfTea}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product;