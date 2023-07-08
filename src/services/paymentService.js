import axios from "../axios";

const momoPayment = (amount) => {
    return axios.get(`/api/MomoPayment/${amount}`);
}

const paymentService = {
    momoPayment
}

export default paymentService;