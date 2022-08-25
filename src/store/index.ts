import {combineReducers, configureStore, createReducer} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: combineReducers({
    meats: createReducer(0, {}),
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
