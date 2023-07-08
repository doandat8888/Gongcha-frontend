import React, { useEffect, useState } from "react";
import images from "../constants/images";
import variables from "../constants/variables";
import ButtonSub from "./ButtonSub";
import categoryService from "../services/categoryService";


const MethodGoodTea = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [typesOfTea, setTypesOfTea] = useState([]);

    const onSetActiveIndex = (index) => {
        setActiveIndex(index);
    }

    useEffect(() => {
        getAllCategories();
    }, [])

    const getAllCategories = async () => {
        let response = await categoryService.getAllCategory();
        if(response) {
            setTypesOfTea(response.data);
        }
    }


    return (
        <div className="method-good-tea">
            <div className="top">
                <div className="left">
                    <div className="title">Bí quyết để có 1 ly trà hảo hạng</div>
                    <img src={images.teaCup} alt="" className="img" />
                </div>
                <div className="right">
                    <div className="type-of-tea-list">
                        {typesOfTea && typesOfTea.length > 0 && typesOfTea.map((typeOfTea, index) => {
                            return (
                                <div key={index} onClick={() => onSetActiveIndex(index)} className={`type-of-tea-item ${activeIndex === index ? 'active-border' : ''}`}>{typeOfTea.name}</div>
                            )
                        })}
                    </div>
                    <div className="type-of-tea-content">
                        {typesOfTea && typesOfTea.length > 0 ? typesOfTea.map((typeOfTea, index) => {
                            return (
                                <div className="type-of-tea-description">
                                    <div className={`title ${activeIndex === index ? 'active' : ''}`}>
                                        {typeOfTea.name}
                                    </div>
                                    <div key={index} onClick={() => onSetActiveIndex(index)} className={`type-of-tea-content-txt ${activeIndex === index ? 'active' : ''}`}>{typeOfTea.description}</div>
                                </div>
                                
                            )
                        }) : 'Không có dữ liệu'}
                        <div className="view-menu-btn">
                            <ButtonSub title="Xem thực đơn" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="bottom">
                <img src={images.instagramImg1} alt="" className="instagram-img" />
                <img src={images.instagramImg2} alt="" className="instagram-img" />
                <img src={images.instagramImg3} alt="" className="instagram-img" />
                <img src={images.instagramImg4} alt="" className="instagram-img" />
            </div>
        </div>
    )
}

export default MethodGoodTea;