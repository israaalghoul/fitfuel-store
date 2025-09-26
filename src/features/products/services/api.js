import { httpClient } from '../../../lib/axios';
import { appRoutes } from '../../../routes';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  

class ProductsService {
    #endPoint = appRoutes.products.new;

    async getAll(q = '') {
        await sleep(1000);
        const response = await httpClient.get(`${this.#endPoint}${q ? `?title=${q}` : ''}`);
        return response.data;
    }

    async create(payload) {
        const response = await httpClient.post(this.#endPoint, payload);
        return response.data
    }

    async update(id, payload) {
        const response = await httpClient.put(`${this.#endPoint}/${id}`, payload);
        return response.data
    }

    async delete(id) {
        const response = await httpClient.delete(`${this.#endPoint}/${id}`);
        return response.data
    }

}

export default new ProductsService();