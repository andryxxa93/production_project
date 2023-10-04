import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesPageInited } from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '@/entitie/Article';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>>(
        'articlesPage/initArticlesPage ',
        async (
            searchParams,
            { getState, dispatch },
        ) => {
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                const order = searchParams.get('order') as SortOrder;
                const sort = searchParams.get('sort') as ArticleSortField;
                const search = searchParams.get('search');

                if (order) {
                    dispatch(articlePageActions.setOrder(order));
                }

                if (search) {
                    dispatch(articlePageActions.setSearch(search));
                }

                if (sort) {
                    dispatch(articlePageActions.setSort(sort));
                }

                dispatch(articlePageActions.initView());
                dispatch(fetchArticlesList({}));
            }
        },
    );
