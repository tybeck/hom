import React, {createContext, FC, useContext, useEffect, useState} from 'react';
import Constants from 'expo-constants';

import {EnvironmentKey, SettingType} from '@hom/types';
import {useSettingQuery, Setting} from '@hom/queries';

interface IAppContext {
  settings: Setting[] | null;
  hasSettingsLoaded: boolean;
  isLoggedIn: boolean;
  scroll: number;
  setScroll: (value: number) => void;
  setAuthToken: (value: string) => void;
  getSetting: (key: SettingType) => string;
  getEnvironment: (key: EnvironmentKey) => string;
  getEndpointUri: (key: EnvironmentKey) => string;
}

export const AppContext = createContext({
  settings: [],
  hasSettingsLoaded: false,
  isLoggedIn: false,
} as IAppContext);

type Environment = {
  [key in EnvironmentKey]: string;
};

export const AppProvider: FC = ({children}) => {
  const [scroll, setScroll] = useState<number>(0);
  const [hasSettingsLoaded, setSettingsLoaded] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
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
    scroll,
    setScroll,
    isLoggedIn,
    hasSettingsLoaded,
    setIsLoggedIn,
    setAuthToken,
    settings: settings?.data?.getSettings || [],
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

  return (
    <AppContext.Provider value={{...context, getSetting, getEnvironment, getEndpointUri}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
