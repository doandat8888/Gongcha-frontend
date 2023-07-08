import React from "react";
import images from "../constants/images";
import AddressSelect from "./AddressSelect";
import ButtonMain from "./ButtonMain";

const AddressSearch = () => {
    return (
        <div className="address-search">
            <div className="header">
                <div className="header-left">
                    <div className="title">Địa chỉ cửa hàng</div>
                    <div className="content">Hãy chọn thành phố bạn đang sống, Gong Cha sẽ hiển thị danh sách các cửa hàng trong khu vực</div>
                </div>
                <div className="header-right">
                    <img src={images.bgTitle} alt="" className="img"/>
                </div>
            </div>
            <div className="body">
                <AddressSelect />
                <div className="search-btn">
                    <ButtonMain title="Tìm cửa hàng"/>
                </div>
            </div>
        </div>
    )
    
    
}

export default AddressSearch;