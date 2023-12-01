import { StateScheme } from '@/app/providers/StoreProvider';

export const getProfileLoading = (state: StateScheme) =>
    state.profile?.isLoading;
