import axios from 'axios';

export const key = "0a09d89290555afd1b3e0000b079d364b70d6f0b";

const api = axios.create({
     baseURL: 'https://api-ssl.bitly.com/v4',
     headers:{
        'Authorization':  `Bearer ${key}`
     }
})

export default api;