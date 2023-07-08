import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import images from "../constants/images";
import AddressSearch from "../components/AddressSearch";
import Sale from "../components/Sale";
import New from "../components/New";
import ButtonSub from "../components/ButtonSub";
import MethodGoodTea from "../components/MethodGoodTea";
import Footer from "../components/Footer";
import { useParams } from "react-router";


const slides1 = [
    {url: "https://gongcha.com.vn/wp-content/uploads/2023/05/cover-web-Dao-Hoang-Kim-01-scaled.jpg", title: "image2"},
    {url: "https://gongcha.com.vn/wp-content/uploads/2023/06/Cover-web_rainbow-01-1-scaled.jpg", title: "image1"},
]

const slides2 = [
    {url: "https://gongcha.com.vn/wp-content/uploads/2023/06/799x500px-01.jpg", title: "image1"},
    {url: "https://gongcha.com.vn/wp-content/uploads/2023/05/799x500-01.jpg", title: "image2"},
]

const newObjArr = [
    {img: "https://gongcha.com.vn/wp-content/uploads/2023/05/799x500-01.jpg", content: "Gong Cha đón hè với Series Đào Hoàng Kim"},
    {img: "https://gongcha.com.vn/wp-content/uploads/2023/06/799x500px-01.jpg", content: "Đón cầu vồng với Gongcha"},
]

const Home = () => {

    const { paymentStatus } = useParams();

    if(paymentStatus && paymentStatus === "success") {
        alert("Thanh toán thành công");
    }

    return (
        <div className="home-page">
            <Header />
            <div className="home-page-body">
                <div className="top-area">
                    <ImageSlider slides={slides1} pagination={true}/>
                </div>
                <div className="bottom-area">
                    <div className="search-shop-area">
                        <img src={images.shopBanner} alt="" className="img" />
                        <AddressSearch />
                    </div>
                    <div className="step-area">
                        <img src={images.sixStep} alt="" className="img"/>
                        <ImageSlider slides={slides2} pagination={false}/>
                    </div>
                    <div className="sale-new-area">
                        <div className="sale-area">
                            <Sale 
                                title="Ưu đãi" 
                                contentBody="Khám phá ngay các chương trình ưu đãi cực hấp dẫn của Gong Cha trong tháng này!"
                                contentFooter="Chào mừng bạn đến với trà sữa Gong Cha, hãy cùng khám phá những khuyến mãi và ưu đãi của chúng tôi trong tháng này nhé."
                            />
                        </div>
                        {newObjArr.map((newObj, index) => {
                            return (
                                <div className="new-area">
                                    <New key={index} img={newObj.img} content={newObj.content}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="tea-banner">
                    <div className="title">Tình túy từ lá trà tươi hảo hạng</div>
                    <div className="learn-more-btn">
                        <ButtonSub title="Tìm hiểu thêm"/>
                    </div>
                </div>
                <div className="good-tea">
                    <MethodGoodTea />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;