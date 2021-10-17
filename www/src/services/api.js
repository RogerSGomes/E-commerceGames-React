import Axios from "axios";

const Api = Axios.create({
    baseURL: "http://localhost:8000",
});

export default Api;