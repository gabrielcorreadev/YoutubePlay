import { environment } from '../../environments/environment';
import axios, { AxiosResponse } from 'axios';
import { httpConfig } from '../system/http-config';
import { accountService } from '../system/account.service';
import { HttpUtil } from '../../util/http.util';

class FeedService {

    basUrl = `${environment.URL_API}/videos`;

    async listVideos(params:any) {
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
}

const videosService = new FeedService();
export { videosService };
