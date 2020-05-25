import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID sP12su-sZ7Mk_nKm7fPAN7QAciNtQOV9R2KMAPQ-gj0'
    }
});