import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { environment } from '../../environments/environment';
import { DataSession } from '../../models/system/data-session';
import { User } from '../../models/system/User';
import { Credentials } from '../../models/system/credentials';

class AccountService {

    basUrl = `${environment.URL_API}/auth`;

    authenticate(credentials: Credentials) {
        return axios.post(`${this.basUrl}/login`, credentials);
    }

    async getDataSessionStorage(): Promise<DataSession> {
        return AsyncStorage.getItem(environment.storageKeys.dataSession)
        .then((json: any) => {
            return JSON.parse(json) as DataSession;
        });
    }

    async getActiveDarkMode(): Promise<boolean> {
        return AsyncStorage.getItem('active_darkMode')
        .then((json: any) => {
            return JSON.parse(json) as boolean;
        });
    }

    async getUserIdStorage(): Promise<string> {
        return AsyncStorage.getItem('userId')
        .then((json: any) => {
            return JSON.parse(json) as string;
        });
    }

    async saveUserId(item: string): Promise<void> {
        return AsyncStorage.setItem('userId', JSON.stringify(item));
    }

    async saveActiveDarkMode(item: boolean): Promise<void> {
        return AsyncStorage.setItem('active_darkMode', JSON.stringify(item));
    }

    async saveDataSession(item: DataSession): Promise<void> {
        return AsyncStorage.setItem(environment.storageKeys.dataSession, JSON.stringify(item));
    }

    async removeSession(): Promise<void> {
        AsyncStorage.removeItem(environment.storageKeys.dataSession);
    }
}

const accountService = new AccountService();
export { accountService };

