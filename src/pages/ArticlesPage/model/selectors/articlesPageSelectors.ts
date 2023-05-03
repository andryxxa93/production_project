import { StateScheme } from 'app/providers/StoreProvider';
import { ArticleViewMode } from 'entitie/Article';

export const getArticlesPageIsLoading = (state: StateScheme) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateScheme) => state.articlesPage?.error;
export const getArticlesPageViewMode = (state: StateScheme) => state.articlesPage?.viewMode || ArticleViewMode.BLOCK;
export const getArticlesPageNum = (state: StateScheme) => state.articlesPage?.page || 0;
export const getArticlesPageLimit = (state: StateScheme) => state.articlesPage?.limit || 8;
export const getArticlesPageHasMore = (state: StateScheme) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateScheme) => state.articlesPage?._init;
