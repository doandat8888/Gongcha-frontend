import React from "react";
import images from "../constants/images";
import variables from "../constants/variables";
import { Link } from "react-router-dom";

const categories = variables.categories;

const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <img src={images.footerImg} alt="" className="footer-img" />
                <div className="content">COPYRIGHT © 2023 GONG CHA VIỆT NAM</div>
            </div>
            <div className="right">
                <div className="right-page-list">
                    {categories.map((category, index) => {
                        return (
                            <Link className="right-page-item" to={category.path}>
                                {category.display}
                            </Link>
                        )
                    })}
                </div>
                <div className="info-email">
                    <i class="fa-regular fa-envelope icon"></i>
                    <div className="content">info@gongcha.com.vn</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;