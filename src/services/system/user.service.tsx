import { environment } from '../../../environments/environment';
import axios from 'axios';
import { httpConfig } from './http-config';

class UserService {

    basUrl = `${environment.URL_API}/usuarios`;

    async obterPorId(id: number) {
        const config = await httpConfig();
        return axios.get(`${this.basUrl}/${id}`, config);
    }

    async alterarSenha(data: any) {
        const config = await httpConfig();
        return axios.post(`${this.basUrl}/alterarSenha`, data, config);
    }

    async adicionar(data: any) {
        const config = await httpConfig();
        return axios.post(this.basUrl, data, config);
    }

    async atualizar(id: number, data: any) {
        const config = await httpConfig();
        return axios.put(`${this.basUrl}/${id}`, data, config);
    }
}

const userService = new UserService();
export { userService };