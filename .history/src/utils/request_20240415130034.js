import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});


// async -> trả về promise
export const get = async (path,options = {}) => {
    const response = await request.get(path);
    return response
}

export default request;
