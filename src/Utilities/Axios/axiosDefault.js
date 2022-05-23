import axios from 'axios'
const client = axios.create({
    baseURL: 'http://locaslhost:5000',
    
});

export const request = ({ ...options }) => {
    client.defaults.headers.common.authorization = 'Bearer token'
    const onSuccess = response => response
    const onError = error => {
        //optionally catch errors and add additional logging here.
        return error;
    }
    return client (options).then(onSuccess).catch(onError)
}