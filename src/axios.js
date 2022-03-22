import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://siluras.com/api/admin',
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
)

export default axiosInstance
