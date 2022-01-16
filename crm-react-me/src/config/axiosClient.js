import axios from "axios";


const clientAxios = axios.create({
    baseURL: "http://localhost:1000"
});

export default clientAxios;