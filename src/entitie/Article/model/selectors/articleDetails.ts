import { StateScheme } from '@/app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateScheme) =>
    state?.articleDetails?.data;
export const getArticleDetailsLoading = (state: StateScheme) =>
    state?.articleDetails?.isLoading;
export const getArticleDetailsError = (state: StateScheme) =>
    state?.articleDetails?.error;
