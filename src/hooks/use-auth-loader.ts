import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {useLazyQuery} from '@apollo/client';

import {IsValidTokenDocument} from '@hom/queries';
import {useApp} from '@hom/context';
import {OS} from '@hom/types';

export function useAuthLoader() {
  const localToken = localStorage.getItem('token');
  const [getValidTokenQuery, {data}] = useLazyQuery(IsValidTokenDocument);
  const [isAuthReady, setAuthReady] = useState<boolean>(false);
  const {setAuthToken} = useApp();

  useEffect(() => {
    if (data?.isValidToken) {
      if (data?.isValidToken?.isValid) {
        setAuthToken(localToken);
      } else {
        localStorage.removeItem('token');
      }
      setAuthReady(true);
    }
  }, [data]);

  useEffect(() => {
    if (Platform.OS === OS.web) {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      const hasToken = params.has('token');

      if (localToken) {
        getValidTokenQuery({variables: {token: localToken}});
        return;
      }

      if (hasToken) {
        const token = params.get('token');
        if (hasToken) {
          localStorage.setItem('token', token);
        }
        setAuthToken(token);
      }
    }

    setAuthReady(true);
  }, []);

  return {isAuthReady};
}
