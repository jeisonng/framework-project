import axios from 'axios';

const apiUrl = "https://jsonplaceholder.typicode.com"

export const requestApi = async (param, method = "GET") => {
    const { data } = await axios({
        url: apiUrl + param,
        method
    })
    return data
}