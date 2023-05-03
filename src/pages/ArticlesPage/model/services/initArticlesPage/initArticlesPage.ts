import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
        'articlesPage/initArticlesPage ',
        async (
            _,
            { getState, dispatch },
        ) => {
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                dispatch(articlePageActions.initView());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },
    );
