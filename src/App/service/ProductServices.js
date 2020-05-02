import config from '../config/environments';

const { API_HOST } = config;

const handleResponse = async (response) => {

    try {
        const result = await response.json();
        if (!response.ok) {
            const error = (result.errorMessage) || response.statusText;
            return Promise.reject(error);
        }
        return result.tooken;
    }
    catch (error) {
        return error;
    }

}