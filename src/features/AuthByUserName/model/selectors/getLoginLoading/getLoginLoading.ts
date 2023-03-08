import { StateScheme } from 'app/providers/StoreProvider';

export const getLoginLoading = (state: StateScheme) => state.loginForm?.isLoading;
