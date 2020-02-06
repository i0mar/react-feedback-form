import axios from "axios";

const instance = axios.create({
    baseURL: "https://event-managment-coded.herokuapp.com/"
});

export default instance;