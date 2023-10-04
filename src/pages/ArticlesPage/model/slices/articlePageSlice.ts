import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateScheme } from '@/app/providers/StoreProvider';
import {
    Article, ArticleSortField, ArticleType, ArticleViewMode,
} from '@/entitie/Article';
import { VIEW_MODE_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { SortOrder } from '@/shared/types';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlePageScheme } from '../types/articlePageScheme';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

export const getArticles = articlesAdapter.getSelectors<StateScheme>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlePageScheme>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        viewMode: ArticleViewMode.BLOCK,
        page: 1,
        hasMore: true,
        limit: 5,
        _init: false,
        search: '',
        order: 'asc',
        sort: ArticleSortField.CREATED,
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleViewMode>) => {
            state.viewMode = action.payload;
            localStorage.setItem(VIEW_MODE_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initView: (state) => {
            const viewMode = localStorage.getItem(VIEW_MODE_LOCALSTORAGE_KEY) as ArticleViewMode;
            state.viewMode = viewMode;
            state.limit = viewMode === ArticleViewMode.BLOCK ? 8 : 4;
            state._init = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlePageReducer, actions: articlePageActions } = articlePageSlice;
