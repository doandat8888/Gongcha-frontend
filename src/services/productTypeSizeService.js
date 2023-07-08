import axios from "../axios";

const getProductsTypeSizeByProId = (productId) => {
    return axios.get(`/api/ProductTypeSizes/${productId}`);
}

const productTypeSizeService = {
    getProductsTypeSizeByProId,
}

export default productTypeSizeService;