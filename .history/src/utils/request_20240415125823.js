import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});


// async -> trả về prom
export const get = async () => {}

export default request;
