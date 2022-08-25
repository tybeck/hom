import type {NavigationProp} from '@react-navigation/native';
import type {DrawerScreenProps} from '@react-navigation/drawer';

export enum MainNavigation {
  Main = 'Main',
  SignIn = 'SignIn',
}

export type RootStackParamList = {
  Main: undefined;
  SignIn: undefined;
};

export type RootDrawerParamList = {
  Home: undefined;
  Menu: undefined;
  Location: undefined;
  ContactUs: undefined;
};

export enum DrawerNavigation {
  Home = 'Home',
  Menu = 'Menu',
  Location = 'Location',
  ContactUs = 'ContactUs',
}

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> = DrawerScreenProps<
  RootDrawerParamList,
  T
>;

export type AllScreenProps = NavigationProp<RootDrawerParamList, keyof RootDrawerParamList>;
export type HomeScreenProps = NavigationProp<RootDrawerParamList, 'Home'>;

export type MainScreenProps = NavigationProp<RootStackParamList, keyof RootStackParamList>;
export type SignInScreenProps = NavigationProp<RootStackParamList, 'SignIn'>;
