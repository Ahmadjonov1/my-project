import axios from "axios";

const axiosInstructionce = axios.create({
    baseURL: "https://e-commerce-api-v2.nt.azimumarov.uz/api/v1"
})

export default axiosInstructionce