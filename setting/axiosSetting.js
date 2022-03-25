import axios from 'axios';

const headersGet = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}
export const get_request = (endUrl) => {
    const headers = headersGet;
    return axios.get(endUrl, { headers })
            .then(res => {
                return {
                    code: 200,
                    status:"success",
                    data: res
                }
            }).catch(errr => {
                return {
                    code: 401,
                    status:"error",
                    data: error 
                }
            })
}