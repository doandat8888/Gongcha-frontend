import axios from "../axios";

const getAllProduct = () => {
    return axios.get(`/api/Products`);
}

const getProductById = (idProduct) => {
    return axios.get(`/api/Products/${idProduct}`);
}

const getProductsByCategoryId = (categoryId) => {
    return axios.get(`/api/Products/${categoryId}/productByCategory`);
}

const productService = {
    getAllProduct,
    getProductsByCategoryId,
    getProductById
}

export default productService;