import { createSelector } from 'reselect';

// Non-memoized selectors
export const getLogin = (state) => state.auth;
export const getUser = (state) => state.auth.user;
export const getLoginError = (state) => state.auth.error;
export const getLoginStatus = (state) => state.auth.loggedin;

// Memoized selectors that transform/compute state
// export const getTransformedAppData = createSelector(selector_1, selector_2, () => {});
