import axios from 'axios';

const baseUrl = '/api/transactions';

const getAll = () => {
    const req = axios.get(baseUrl);
    return req.then((response) => response.data);
};

const create = (newTransaction) => {
    const req = axios.post(baseUrl, newTransaction);
    return req.then((response) => response.data);
};

const update = (id, newTransaction) => {
    const req = axios.put(`${baseUrl}/${id}`, newTransaction);
    return req.then((response) => response.data);
};

const remove = (id) => axios.delete(`${baseUrl}/${id}`);

export default { getAll, create, update, remove };
