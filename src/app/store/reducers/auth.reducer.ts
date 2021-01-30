import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User } from 'src/app/pages/login/resources/auth';
import * as fromRoot from './index';
export const authFeatureKey = 'auth';

export interface State {
  user: User;
  error: any;
}

export const initialState: State = {
  user: {
    id: null,
    username: null,
    email: null,
    isadmin: null,
    lastconnect: null
  },
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        username: null,
        email: null,
        isadmin: null,
        lastconnect: null,
      },
      error: action.error,
    };
  })
);

export const selectUserState = createFeatureSelector<State>('auth');

export const getUserName = createSelector(
  selectUserState,
    state => state.user.username
);

export const getLastConnect = createSelector(
  selectUserState,
    state => state.user.lastconnect
);

export const getIsAdmin = createSelector(
  selectUserState,
    state => state.user.isadmin
);