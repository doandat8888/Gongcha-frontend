import React, { useState } from "react";
import images from "../constants/images";
import { Link, useLocation } from "react-router-dom";
import variables from "../constants/variables";

const categories = variables.categories;

const Header = () => {
    let path = useLocation().pathname;
    let indexActive = categories.findIndex((category) => category.path === path);
    const [active, setActive] = useState(false);

    const onToggleHeader = () => {
        setActive(!active);
    }

    return (
        <div className="header">
            <img src={images.logo} alt="" className="logo-img"/>
            <ul className="page-list">
                {categories.map((category, index) => {
                    return (
                        <li className="page-item" key={index} onClick={onToggleHeader}>
                            <Link className={`page-item-link ${indexActive === index ? 'active' : ''}`} to={category.path}>{category.display}</Link>
                        </li>
                    )
                })}
            </ul>
            <ul className="icon-list">
                <li className="icon-item">
                    <i className="fa-regular fa-user icon-img"></i>
                </li>
                <li className="icon-item">
                    <i className="fa-solid fa-cart-shopping icon-img"></i>
                </li>
            </ul>
            <button className="search-btn">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </button>
        </div>
    )
}

export default Header;