import React from "react";

const New = (props) => {

    const {img, content} = props;
    return (
        <div className="new">
            <img src={img} alt="" className="new-img"/>
            <div className="new-content">
                <div className="left">{content}</div>
                <div className="right">
                    <div className="right-content">Xem thêm</div>
                    <i class="fa-solid fa-greater-than right-icon"></i>
                </div>
            </div>
        </div>
    )
    
}

export default New;