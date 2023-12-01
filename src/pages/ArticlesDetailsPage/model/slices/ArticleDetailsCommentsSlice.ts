import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from '@/entitie/Comment';
import { fetchCommentsByArticleId } from '../../../ArticlesDetailsPage/model/services/fetchCommentsByArticleId';
import { StateScheme } from '@/app/providers/StoreProvider';
import { ArticlesDetailsCommentsScheme } from '../../../ArticlesDetailsPage';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateScheme>(
    (state) =>
        state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState:
        commentsAdapter.getInitialState<ArticlesDetailsCommentsScheme>({
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } =
    articleDetailsCommentsSlice;
