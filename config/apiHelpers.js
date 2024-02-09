import axios from 'axios'
    
export const callApi = async (url) => {
    try {
        const response = await axios(url);
        return {data: response.data, error: null}
    } catch (error) {
        return {data: null, error}
    }
}