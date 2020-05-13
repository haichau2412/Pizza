import config from '../config/environments';

const { API_HOST } = config;

const handleResponse = async (response) => {
    try {
        const result = await response.json();
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api

            }
            const error = (result.errorMessage) || response.statusText;
            return Promise.reject(error);
        }
        return { ...result };
    }
    catch (error) {
        return { error };
    }

}

export const authUser = async ({ values, type }) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values })
    }

    let response;

    if (type === 'signup') {
        response = await fetch(`${API_HOST}/registration`, requestOptions);
    }
    if (type === 'login') {
        response = await fetch(`${API_HOST}/login`, requestOptions);
    }

    const data = await handleResponse(response);

    return data;
}

export const checkout = async ({ address, cart, token, totalPrice }) => {
    const keys = Object.keys(cart);
    const formattedCart = keys.map((producID, index) => {
        return {
            producID,
            quantity: cart[producID].quantity
        }
    })
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({ address, cart: formattedCart, totalPrice })
    }

    const response = await fetch(`${API_HOST}/orders`, requestOptions);

    const data = await handleResponse(response);

    return data;
}

export const confirmEmail = async ({ hashedToken, username }) => {
    const response = await fetch(`${API_HOST}/${hashedToken}/${username}`);
    const data = await handleResponse(response);
    return data;
}

// export const signin = async (info) => {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...info })
//     }

//     const response = await fetch(`${API_HOST}/signin`, requestOptions);
//     const data = await handleResponse(response);

//     return data;
// }



export default {
    authUser,
    handleResponse,
    checkout,
    confirmEmail,
}