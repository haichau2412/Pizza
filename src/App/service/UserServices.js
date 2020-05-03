import config from '../config/environments';

const { API_HOST } = config;

const handleResponse = async (response) => {

    try {
        const result = await response.json();
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }
            const error = (result.errorMessage) || response.statusText;
            return Promise.reject(error);
        }
        return { token: result.token };
    }
    catch (error) {
        return { error };
    }

}

export const signup = async (info) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...info })
    }

    const response = await fetch(`${API_HOST}/registration`, requestOptions);
    const data = await handleResponse(response);

    return data;
}

const logout = () => {

}

export default {
    signup,
    handleResponse
}