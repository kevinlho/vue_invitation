import axios from 'axios';

import {showSnackbar} from "../utils/snackbar";

const URLS = {
    BASE_URL: 'https://dummyjson.com',
    LOGIN: '/auth/login', //post
    INVITATION_LIST: '/products' // get
}

async function http_axios(axiosConfig){
    const axiosInstance = axios.create({
        ...axiosConfig,
        baseURL: URLS.BASE_URL,
    });
    axiosInstance.interceptors.request.use(request => {
        console.log('Starting Request', JSON.stringify(request.data, null, 2))
        return request
    })
    axiosInstance.interceptors.response.use(response => {
        console.log('Response:', JSON.stringify(response, null, 2))
        return response
    })
    return axiosInstance(axiosConfig);
}

async function axiosGet(url, header, params){
    let requestConfig = {
        method: 'GET',
        headers: header ? header : null,
        url: url ? url : null,
        params: params ? params: null
    };

    try {
        const response = await http_axios(requestConfig);
        return statusHandler(response, requestConfig)
    }
    catch (e){
        //error axios handler
        return null
    }
    // return statusHandler(response, axiosConfig);
}

async function axiosPost(url, header, body, params){
    let requestConfig = {
        method: 'POST',
        headers: header ? header : null,
        url: url ? url : null,
        params: params ? params: null,
        data: body ? body: null
    };

    try {
        const response = await http_axios(requestConfig);
        return statusHandler(response, requestConfig)
        // return statusHandler(response, axiosConfig);
    }
    catch (e){
        //error axios handler
        return null
    }
}

function getAxiosLocalJson(jsonLocalPath){
    return axios.get(jsonLocalPath);
}

function statusHandler(response, requestConfig){
    try {
        switch (response.status){
            case 200:
                return response.data
            default:
                showSnackbar("error")
                // axiosHttpLogBuilder(response, requestConfig);
                return null
        }
    }
    catch (e){
        console.log(e)
    }
}

function axiosHttpLogBuilder(response, requestConfig){
    if(import.meta.env.DEV){
        console.warn("HTTP_STATUS:"+response.status)
        console.warn("REQUEST_CONFIG:" + JSON.stringify(requestConfig));
        console.warn("RESPONSE:" + JSON.stringify(response.data));
    }
}

function axiosCatchLogBuilder(err){

}

export {
    URLS,
    axiosGet,
    axiosPost,
    getAxiosLocalJson
}
