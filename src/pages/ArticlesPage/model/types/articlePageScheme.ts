import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleViewMode } from 'entitie/Article';

export interface ArticlePageScheme extends EntityState<Article>{
    isLoading?: boolean;
    error?: string

    viewMode: ArticleViewMode;
    page: number;
    limit?: number;
    hasMore: boolean;

    _init: boolean;
}
