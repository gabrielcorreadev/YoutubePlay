export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  SearchResult: { query: string };
  Watch: { videoId: string };
  ShortsWatch: { videoId: string };
  Notifications: { notificationId: number };
  SplashScreen: undefined;
  StartApp: undefined;
  Login: undefined;
}