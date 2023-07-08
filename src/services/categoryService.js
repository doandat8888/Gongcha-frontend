import axios from "../axios";

const getAllCategory = () => {
    return axios.get(`/api/Categories`);
}

const categoryService = {
    getAllCategory
}

export default categoryService;