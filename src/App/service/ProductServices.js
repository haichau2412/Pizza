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
        return result;
    }
    catch (error) {
        return { error };
    }

}

export const getProducts = async () => {
    const response = await fetch(`${API_HOST}/products`);
    const data = await handleResponse(response);

    const products = data.reduce((result, product, index) => {
        const { category, photo, name, description, price, _id } = product;
        if (!result[category]) {
            result[category] = [{ _id, photo, name, description, price }];
        } else {
            result[product.category].push({ _id, photo, name, description, price });
        }
        return result;
    }, {})

    return products;
}