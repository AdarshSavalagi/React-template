import axios from '../interceptors';
import API_ENDPOINTS from '../endpoints';

export const login = async (credentials) => {
    const { data } = await axios.post(API_ENDPOINTS.login, credentials);
    localStorage.setItem('authToken', data.token);
    return data;
};

export const logout = async () => {
    await axios.post(API_ENDPOINTS.logout);
    localStorage.removeItem('authToken');
};
