import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateScheme } from '@/app/providers/StoreProvider';
import { Article } from '@/entitie/Article';
import { fetchArticlesRecommendations } from '../../../ArticlesDetailsPage/model/services/fetchArticleRecommendations';
import { ArticlesDetailsRecommendationsScheme } from '../types/ArticlesDetailsRecommendationsScheme';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<StateScheme>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState(),
    );

const ArticleDetailsPageRecommendationsSlice = createSlice({
    name: 'ArticleRecommendationsSlice',
    initialState:
        recommendationsAdapter.getInitialState<ArticlesDetailsRecommendationsScheme>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesRecommendations.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecommendationsReducer } =
    ArticleDetailsPageRecommendationsSlice;
