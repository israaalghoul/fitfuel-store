import { httpClient } from "../../../lib/axios";
import { appRoutes } from "../../../routes";


class SearchProductsService {
    #endPoint = appRoutes.products.new;

    async search(title) {
        const response = await httpClient.get(this.#endPoint, {
            params: { title }
        });
        return response.data
    }
}

export default new SearchProductsService()