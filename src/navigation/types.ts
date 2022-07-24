import type {
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export enum ScreenType {
  Home = 'Home',
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  NotFound: undefined;
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = undefined;
export type HomeTabScreenProps<T extends keyof HomeTabParamList> = RootStackScreenProps<keyof RootStackParamList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}