import { environment } from '../../environments/environment';
import { accountService } from './account.service';

export const httpConfig = async () => {
    return {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.YoutubeApiKey}`,
        "Access-Control-Allow-Origin": "*",
    }
}
}