import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entitie/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entitie/Comment';
import { fetchCommentsByArticleId } from '../../../ArticlesDetailsPage/model/services/fetchCommentsByArticleId';
import { getArticleDetailsData } from '@/entitie/Article';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'ArticleDetailsPage/addCommentForArticle',
    async (text, { dispatch, extra, rejectWithValue, getState }) => {
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) return rejectWithValue('no data');

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                text,
                userId: userData.id,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
