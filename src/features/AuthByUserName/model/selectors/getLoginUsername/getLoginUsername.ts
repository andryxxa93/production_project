import { StateScheme } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: StateScheme) => state.loginForm?.username;
