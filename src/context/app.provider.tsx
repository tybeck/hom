import React, {createContext, FC, useContext, useEffect, useState} from 'react';
import Constants from 'expo-constants';

import {Content, EnvironmentKey, SettingType} from '@hom/types';
import { useSettingQuery, Setting, Category, useCategoryQuery } from '@hom/queries'

interface IAppContext {
  settings: Setting[] | null;
  hasSettingsLoaded: boolean;
  isLoggedIn: boolean;
  scroll: number;
  setScroll: (value: number) => void;
  setHeaderHeight: (value: number) => void;
  setAuthToken: (value: string) => void;
  getSetting: (key: SettingType) => string;
  getEnvironment: (key: EnvironmentKey) => string;
  getEndpointUri: (key: EnvironmentKey) => string;
  setComponentPositionY: (component: Content, y: number) => void;
  categories: Category[];
  headerHeight: number;
  positions: Positions;
}

export const AppContext = createContext({
  settings: [],
  hasSettingsLoaded: false,
  isLoggedIn: false,
  headerHeight: 0,
  positions: {},
} as IAppContext);

type Environment = {
  [key in EnvironmentKey]: string;
};

type Positions = {
  [key in Content]?: number;
};

export const AppProvider: FC = ({children}) => {
  const [scroll, setScroll] = useState<number>(0);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [hasSettingsLoaded, setSettingsLoaded] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [positions, setPositions] = useState<Positions>({});
  const categories = useCategoryQuery();
  const settings = useSettingQuery();

  useEffect(() => {
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, [authToken]);

  useEffect(() => {
    if (settings && settings?.data) {
      setSettingsLoaded(true);
    }
  }, [settings]);

  const context = {
    headerHeight,
    scroll,
    setScroll,
    isLoggedIn,
    hasSettingsLoaded,
    setIsLoggedIn,
    setAuthToken,
    setHeaderHeight,
    settings: settings?.data?.getSettings || [],
    categories: categories?.data?.getCategories || [],
    positions,
  };

  const getSetting = (key: SettingType) => {
    if (context.settings) {
      return context.settings.find((setting) => setting.key === key)?.value;
    }
    return null;
  };

  const getEnvironment = (key: EnvironmentKey) => {
    const constants = Constants.manifest.extra as Environment;
    if (constants && constants[key]) {
      return constants[key];
    }
    return null;
  };

  const getEndpointUri = (key: EnvironmentKey) => {
    const baseUri = getEnvironment(EnvironmentKey.BaseUri);
    const endpointUri = getEnvironment(key);
    if (baseUri && endpointUri) {
      return [baseUri, endpointUri].join('/');
    }
    return null;
  };

  const setComponentPositionY = (component: Content, y: number) => {
    setPositions({
      ...positions,
      [component]: y,
    });
  };

  return (
    <AppContext.Provider
      value={{...context, getSetting, getEnvironment, getEndpointUri, setComponentPositionY}}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
