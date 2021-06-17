import { production } from './environment.prod';

const development = {
    production: false,
    URL_API: 'https://www.googleapis.com/youtube/v3',
    YoutubeApiKey: 'AIzaSyCGanV6AuEj9hBnN9mjeJAilkaalXoxdxI',
    URL_NOTIFICATION: 'https://onesignal.com/api/v1/notifications',
    OneSignalId: '7e58a8ea-f69a-4c1a-99fd-a721bfef1721',
    OneSignalApiKey: 'NTVjYzAyNGUtODNlMy00OTQ2LTk1NmEtNmU4MDhhYWM0MDI4',
    storageKeys: {
        dataSession: 'smart-data-session',
        lock: 'smart-lock',
        activeRoute: 'HomeStack'
    }
};

let environment = development;

if (environment.production) {
    environment = production;
}

export { environment };