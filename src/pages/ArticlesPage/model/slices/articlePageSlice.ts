import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateScheme } from 'app/providers/StoreProvider';
import { Article, ArticleViewMode } from 'entitie/Article';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { VIEW_MODE_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
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
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleViewMode>) => {
            state.viewMode = action.payload;
            localStorage.setItem(VIEW_MODE_LOCALSTORAGE_KEY, action.payload);
        },
        initView: (state) => {
            state.viewMode = localStorage.getItem(VIEW_MODE_LOCALSTORAGE_KEY) as ArticleViewMode;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlePageReducer, actions: articlePageActions } = articlePageSlice;
