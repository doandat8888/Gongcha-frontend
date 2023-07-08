import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Navigate, useParams } from "react-router";
import productService from "../services/productService";
import images from "../constants/images";
import productTypeSizeService from "../services/productTypeSizeService";
import sizeService from "../services/sizeService";
import paymentService from "../services/paymentService";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
    
    const [product, setProduct] = useState({});
    const [productsTypeSize, setProductsTypeSize] = useState([]);
    const [sizes, setSizes] = useState([]);
    const { id } = useParams();
    const [productTypeArr, setProductTypeArr] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProductById();
        getProductsTypeSizeByProductId();
        getAllSize();
    }, [id, sizes]);

    const getProductById = async() => {
        let response = await productService.getProductById(id);
        if(response) {
            setProduct(response.data);
        }
    }

    const getProductsTypeSizeByProductId = async() => {
        let response = await productTypeSizeService.getProductsTypeSizeByProId(id);
        if(response && response.data.length > 0) {
            setProductsTypeSize(response.data);
            let typeArr = [];
            for(let i = 0; i < response.data.length; i++) {
                for(let j = i + 1; j < response.data.length; j++) {
                    if(i === 0) {
                        typeArr.push(response.data[i].typeId);

                    }else if(response.data[i].typeId !== response.data[j].typeId) {
                        typeArr.push(response.data[i].typeId);
                    }
                }
            }
            setProductTypeArr(typeArr);
        }
    }

    const getAllSize = async() => {
        let response = await sizeService.getAllSize();
        if(response) {
            setSizes(response.data);
        } 
    }

    const getSizeById = (sizeId) => {
        let size = sizes && sizes.length > 0 ? sizes.find((size, index) => size.id === sizeId) : null;
        return size.name;
    }

    const onCheckout = async(type) => {
        if(type === "Momo") {
            let response = await paymentService.momoPayment(productsTypeSize[0].price);
            if(response && response.data) {
                console.log(response.data);
            }
        }
    }

    return (
        <div className="product-detail">
            <Header />
            <div className="product-detail-body">
                <div className="left">
                    <img src={product && product.img} alt="" className="product-img" />
                    <div className="left-txt">* Hình ảnh chỉ mang tính chất minh họa</div>
                </div>
                <div className="right">
                    <div className="product-name">{product && product.name}</div>
                    {productTypeArr && productTypeArr.length > 0 && productTypeArr.map((productType, index) => {
                        return (
                            <img src={productType === 1 ? images.coldType : ''} alt="" className="product-type-img" />
                        )
                    })}
                    <div className="product-description">{product && product.description}</div>
                    <div className="product-info-txt">Thông tin</div>
                    <div className="info-product-detail">
                        <table className="table-info-product">
                            <tbody>
                                <tr className="ttr">
                                    <th className="ttr-item">Tên món</th>
                                    <th className="ttr-item">Size</th>
                                    <th className="ttr-item">Giá tiền (VNĐ)</th>
                                    <th className="ttr-item">Lượng đường</th>
                                    <th className="ttr-item">Caffeins</th>
                                    <th className="ttr-item">Calories (Có đường)</th>
                                    <th className="ttr-item">Calories (Không đường)</th>
                                </tr>
                                <tr className="product-name">
                                    <th className="product-name-col" rowSpan={3}>{product.name}</th>
                                </tr>
                                {productsTypeSize && productsTypeSize.map((productTypeSize, index) => {
                                    return (
                                        <tr className="ttb" key={index}>
                                            <th className="ttr-item">{getSizeById(productTypeSize.sizeId)}</th>
                                            <th className="ttr-item">{productTypeSize.price}</th>
                                            <th className="ttr-item">{productTypeSize.sugarAmount}</th>
                                            <th className="ttr-item">{productTypeSize.caffeinAmount}</th>
                                            <th className="ttr-item">{productTypeSize.calloriesSugarAmount}</th>
                                            <th className="ttr-item">{productTypeSize.calloriesNoSugarAmount}</th>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="right-txt">(*) Thông tin dinh dưỡng chỉ mang tính chất tham khảo.</div>
                    <button className="checkout" onClick={() => onCheckout("Momo")}>Thanh toán Momo</button>
                </div>
            </div>
            
        </div>
    )
}

export default ProductDetail;