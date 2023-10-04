import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
        'articlesPage/fetchNextArticle ',
        async (
            _,
            { getState, dispatch },
        ) => {
            const page = getArticlesPageNum(getState());
            const hasMore = getArticlesPageHasMore(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlePageActions.setPage(page + 1));
                dispatch(fetchArticlesList({}));
            }
        },
    );
