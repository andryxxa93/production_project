import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleViewMode, ArticleSortField, ArticleType,
} from 'entitie/Article';
import { SortOrder } from 'shared/types';

export interface ArticlePageScheme extends EntityState<Article>{
    isLoading?: boolean;
    error?: string

    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    viewMode: ArticleViewMode;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
    _init: boolean;
}
