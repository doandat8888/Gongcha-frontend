import axios from "../axios";

const getAllSize = (productId) => {
    return axios.get(`/api/Sizes`);
}

const sizeService = {
    getAllSize,
}

export default sizeService;