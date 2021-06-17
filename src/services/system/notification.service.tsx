import { environment } from '../../environments/environment';
import axios from 'axios';
import { httpConfig } from './http-config';

class NotificationService {

    basUrl = `${environment.URL_NOTIFICATION}`;

    config = {
        headers:{
        "Content-type": "application/json",
        "Authorization": `Basic ${environment.OneSignalApiKey}`,
      }
    }

    async createNotification(contents: any, player_ids: any[]) {
        var message = { 
            app_id: environment.OneSignalId,
            contents: contents,
            headings:{"en": "Nova mensagem"},
            include_player_ids: player_ids,
            android_accent_color:'9f2349',
            android_background_layout:{
              headings_color:'9f2349'
            }
          };
          
        return axios.post(this.basUrl, message, this.config);
    }

    async cancelNotification(id: number) {
        return axios.delete(`${this.basUrl}/${id}`);
    }
}

const notificationService = new NotificationService();
export { notificationService };