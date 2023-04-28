import { StateScheme } from 'app/providers/StoreProvider';
import { ArticleViewMode } from 'entitie/Article';

export const getArticlesPageIsLoading = (state: StateScheme) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateScheme) => state.articlesPage?.error;
export const getArticlesPageViewMode = (state: StateScheme) => state.articlesPage?.viewMode || ArticleViewMode.BLOCK;
