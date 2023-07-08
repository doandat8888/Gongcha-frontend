import React from "react";
import images from "../constants/images";

const Sale = (props) => {

    const {title, contentBody, contentFooter} = props;

    return (
        <div className="sale">
            <div className="sale-header">
                <img src={images.bgTitle} alt="" />
                <div className="sale-header-title">{title}</div>
            </div>
            <div className="sale-body">
                <div className="content">{contentBody}</div>
            </div>
            <hr className="horizon-small"/>
            <div className="sale-footer">
                <div className="content">{contentFooter}</div>
            </div>
        </div>
    )
}

export default Sale;