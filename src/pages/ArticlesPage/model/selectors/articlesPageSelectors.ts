import { StateScheme } from '@/app/providers/StoreProvider';
import {
    ArticleSortField,
    ArticleType,
    ArticleViewMode,
} from '@/entitie/Article';

export const getArticlesPageIsLoading = (state: StateScheme) =>
    state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateScheme) =>
    state.articlesPage?.error;
export const getArticlesPageViewMode = (state: StateScheme) =>
    state.articlesPage?.viewMode || ArticleViewMode.BLOCK;
export const getArticlesPageNum = (state: StateScheme) =>
    state.articlesPage?.page || 0;
export const getArticlesPageLimit = (state: StateScheme) =>
    state.articlesPage?.limit || 8;
export const getArticlesPageHasMore = (state: StateScheme) =>
    state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateScheme) =>
    state.articlesPage?._init;
export const getArticlesPageOrder = (state: StateScheme) =>
    state.articlesPage?.order ?? 'asc';
export const getArticlesPageSort = (state: StateScheme) =>
    state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateScheme) =>
    state.articlesPage?.search ?? '';
export const getArticlesPageType = (state: StateScheme) =>
    state.articlesPage?.type ?? ArticleType.ALL;
