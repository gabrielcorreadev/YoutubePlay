import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './root-stack-param-list';

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type WatchScreenRouteProp = RouteProp<RootStackParamList, 'Watch'>;
export type ShortsWatchScreenRouteProp = RouteProp<RootStackParamList, 'ShortsWatch'>;
export type SearchScreenRouteProp = RouteProp<RootStackParamList, 'Search'>;
export type SearchResultScreenRouteProp = RouteProp<RootStackParamList, 'SearchResult'>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type WatchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Watch'
>;

export type ShortsWatchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ShortsWatch'
>;

export type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Search'
>;

export type SearchResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SearchResult'
>;