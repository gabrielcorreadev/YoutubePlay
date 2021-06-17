import { environment } from '../../environments/environment';
import axios, { AxiosResponse } from 'axios';
import { httpConfig } from '../system/http-config';
import { accountService } from '../system/account.service';
import { HttpUtil } from '../../util/http.util';

class FeedService {

    basUrl = `${environment.URL_API}/search`;

    async list(params:any) {
        const config = await httpConfig();
        const query = HttpUtil.getQueryStringFromObject(params);
        const url = `${this.basUrl}${query}`;
        return axios.get(url);
    }

    async feedShorts(params:any) {
        const config = await httpConfig();
        const query = HttpUtil.getQueryStringFromObject(params);
        const url = `${this.basUrl}${query}`;
        return axios.get(url);
    }

    async getByUserId() {
        const config = await httpConfig();
        const session = await accountService.getDataSessionStorage();
        return axios.get(`${this.basUrl}/user/${session.user.id}`, config);
    }

    async add(data: any) {
        const config = await httpConfig();
        return axios.post(this.basUrl, data, config);
    }

      async searchSuggest(params:any) {
        const config = await httpConfig();
        const query = HttpUtil.getQueryStringFromObject(params);
        const urlBase = 'http://suggestqueries.google.com/complete/search';
        const url = `${urlBase}${query}`;
        return axios.get(url);
    }
}

const feedService = new FeedService();
export { feedService };
